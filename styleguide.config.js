const path = require('path');

module.exports = {
    // set your styleguidist configuration here
    title: 'VKUI styleguide',
    template: {
        body: {
            htmlAttributes: { lang: 'en' },
        }
    },
    renderRootJsx: path.join(__dirname, 'styleguide/styleguide.root.js'),
    require: [path.join(__dirname, 'styleguide/global.requires.js')],
    //components: 'src/components/**/[A-Z]*.vue',
    //defaultExample: true,
    sections: [
        {
            name: 'Intro',
            content: './styleguide/pages/intro.md'
        }, {
            name: 'Installation',
            content: './styleguide/pages/installation.md'
        }, {
            name: 'HTML',
            content: './styleguide/pages/html.md'
        }, {
            name: 'Hello World',
            content: './styleguide/pages/hello_world.md'
        }, {
            name: 'Concept',
            content: './styleguide/pages/concept.md'
        }, {
            name: 'Components',
            sections: [{
                name: 'Forms',
                components: () => [
                    './src/components/FormLayout/FormLayout.vue',
                    './src/components/FormLayoutGroup/FormLayoutGroup.js',
                    './src/components/FormStatus/FormStatus.js',
                    './src/components/Slider/Slider.js',
                    './src/components/RangeSlider/RangeSlider.js',
                    './src/components/Radio/Radio.js',
                    './src/components/Checkbox/Checkbox.js',
                    './src/components/Input/Input.js',
                    './src/components/Select/Select.js',
                    './src/components/SelectMimicry/SelectMimicry.js',
                    './src/components/Textarea/Textarea.js',
                    './src/components/File/File.js'
                ]
            }]
        }
    ],

};
