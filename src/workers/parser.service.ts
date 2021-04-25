import {fork} from 'child_process'
import {Injectable} from "@nestjs/common";
import {Cron} from "@nestjs/schedule";
import {InjectRepository} from "@nestjs/typeorm";
import {Domains} from "../domain/entities/domains.entity";
import {Repository} from "typeorm";

@Injectable()
export class ParserService {
    constructor(
        @InjectRepository(Domains)
        private readonly dRepo: Repository<Domains>,
    ) {}

    private fork = null;

    async onModuleInit() {
        if (this.fork) {
            this.fork.kill();
        }

        this.fork = fork(`${__dirname}/parsers/changes.js`);

        this.fork.on('exit', () => this.onModuleInit());
        this.fork.on('message', (args) => this.save(args));

        this.parse('http://google.com')
    }

    @Cron('* * * * *')
    private async run() {
        const domains = await this.dRepo.find({
            relations: ['resources']
        });

        domains.forEach(({url}) => this.parse(url))
    }

    async save(resource): Promise<void> {
        await this.dRepo.save(resource)
    }

    parse(url: string): void {
        this.fork.send({url});
    }
}


