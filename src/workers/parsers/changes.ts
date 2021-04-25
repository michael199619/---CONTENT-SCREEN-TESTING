import * as Nightmare from 'nightmare'
import * as Rembrandt from 'rembrandt';
import * as fs from 'fs'

const stack = [];

const handler = async (url, html) => {
    const nightmare = Nightmare({
        show: false,
        maxHeight:16384,
        maxWidth:16384,
        width: 1200,
        height: 1024,
    });

    const {width, height} = await nightmare.goto('https://github.com/')
        .wait('body')
        .evaluate(function() {
            const body = document.querySelector('body');
            return {
                width: body.scrollWidth,
                height: body.scrollHeight
            }
        });

    const path =  await nightmare.viewport(width, height)
        .wait(1000)
        .screenshot('./screenshots/sample.png');

    const rembrandt = new Rembrandt({
        // `imageA` and `imageB` can be either Strings (file path on node.js,
        // public url on Browsers) or Buffers
        imageA: './screenshots/sample.png',
        imageB: './screenshots/sample.png',


        // The maximum threshold (0...1 for THRESHOLD_PERCENT, pixel count for THRESHOLD_PIXELS
        maxThreshold: 0.01,

        // Maximum color delta (0...255):
        maxDelta: 20,

        // Maximum surrounding pixel offset
        maxOffset: 0,

        renderComposition: true, // Should Rembrandt render a composition image?
        thresholdType: Rembrandt.THRESHOLD_PERCENT,
        compositionMaskColor: Rembrandt.Color.RED
    })

    rembrandt.compare()
        .then(function (result) {
            console.log('Passed:', result.passed)
            console.log('Difference:', (result.threshold * 100).toFixed(2), '%')
            console.log('Composition image buffer:', result.compositionImage)

            fs.writeFileSync('./test.png', result.compositionImage)

            // Note that `compositionImage` is an Image when Rembrandt.js is run in the browser environment
        })
        .catch((e) => {
            console.error(e)
        })
}

process.on('message', async ({url, html}) => {
    const page = await handler(url, html);

    console.log(page)
});
