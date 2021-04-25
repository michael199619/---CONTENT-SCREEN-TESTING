import * as Nightmare from 'nightmare'

const stack = [];

const handler = async (url, html) => {
    const nightmare = Nightmare({ show: true });
    return await nightmare.goto(url)
        .wait(2)
}

process.on('message', ({url, html}) => {
    handler(url, html);
});
