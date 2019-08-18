<template>
    <VKView activePanel="button" :header="false">
        <VKPanel id="button">
            <VKGroup title="Кнопка-ячейка">
                <VKCellButton>Добавить новую школу</VKCellButton>
            </VKGroup>
            <VKGroup title="Стилизация">
                <VKCellButton level="danger">Покинуть беседу</VKCellButton>
            </VKGroup>
            <VKGroup title="Кнопка c иконкой">
                <VKCellButton>
                    <vkui-icon name="add" :size="24" slot="before" />
                    Добавить родственника
                </VKCellButton>
            </VKGroup>
        </VKPanel>
    </VKView>
</template>

<script>
    export default {
        name: 'CellButtons'
    }
</script>
