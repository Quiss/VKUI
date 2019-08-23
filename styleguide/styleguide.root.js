export default function (previewComponent) {

    return {
        render(createElement) {
            console.log(createElement(previewComponent));
            return createElement('vue-safe-iframe', {
                props: {
                    html: createElement(previewComponent),
                    openLinksInFrame: true,
                    allowScripts: true,
                    allowHrefTargets: true,
                }
            });
        }
    }
}
