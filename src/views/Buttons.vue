<template>
    <VKView activePanel="button" :header="false">
        <VKPanel id="button">
            <VKGroup title="Типы кнопок">
                <VKDiv>
                    <VKButton>Primary</VKButton>
                </VKDiv>
                <VKDiv>
                    <VKButton level="secondary">Secondary</VKButton>
                </VKDiv>
                <VKDiv>
                    <VKButton level="tertiary">Tertiary</VKButton>
                </VKDiv>
                <VKDiv>
                    <VKButton level="outline">Outline</VKButton>
                </VKDiv>
                <VKDiv>
                    <VKButton level="commerce">Commerce</VKButton>
                </VKDiv>
                <VKDiv>
                    <VKButton level="destructive">Destructive</VKButton>
                </VKDiv>
            </VKGroup>
            <VKGroup title="Допустимые размеры">
                <VKDiv>
                    <VKButton>Medium</VKButton>
                </VKDiv>
                <VKDiv>
                    <VKButton size="l">Large</VKButton>
                </VKDiv>
                <VKDiv>
                    <VKButton size="xl" level="secondary">Extra large</VKButton>
                </VKDiv>
            </VKGroup>
            <VKGroup title="Растягивание по ширине">
                <VKDiv>
                    <VKButton size="l">No stretch</VKButton>
                </VKDiv>
                <VKDiv :style="{display: 'flex'}">
                <VKButton size="l" stretched :style="{ marginRight: '8px' }">Stretched</VKButton>
                <VKButton size="l" stretched level="secondary">Stretched</VKButton>
                </VKDiv>
            </VKGroup>
            <VKGroup title="Кнопки с иконками">
                <VKDiv>
                    <VKButton>
                        <vkui-icon name="add" :size="16" slot="before" />
                        Add item
                    </VKButton>
                </VKDiv>
                <VKDiv>
                    <VKButton size="l">
                        <vkui-icon name="camera" :size="24" slot="before" />
                        Take a photo
                    </VKButton>
                </VKDiv>
                <VKDiv>
                    <VKButton level="secondary" size="l">
                        <vkui-icon name="shuffle" :size="24" slot="before" />
                        Shuffle
                    </VKButton>
                </VKDiv>
            </VKGroup>
            <VKGroup title="Ссылки в виде кнопок">
                <VKDiv>
                    <VKButton component="a" href="#">I am link</VKButton>
                </VKDiv>
            </VKGroup>
        </VKPanel>
    </VKView>
</template>

<script>
    export default {
        name: 'Buttons'
    }
</script>
