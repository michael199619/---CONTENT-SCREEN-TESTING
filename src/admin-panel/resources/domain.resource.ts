import AdminBro, { ResourceWithOptions } from 'admin-bro';
import {Domains} from '../../domain/entities/domains.entity';
import {Resource} from "../../domain/entities/resource.entity";

const Domain = {
      resource: Domains,
      options: {
        showProperties: ['id'],
        properties: {
          id: AdminBro.bundle('./templates/dashboard.tsx')
        },
      },
    };

export default Domain;
