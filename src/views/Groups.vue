<template>
    <VKView activePanel="group">
        <VKPanel id="group">
            <VKPanelHeader>
                Group
            </VKPanelHeader>
            <VKGroup title="Group title" description="Group description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.">
                <VKList>
                    <VKCell>
                        One
                    </VKCell>
                    <VKCell>
                        Two
                    </VKCell>
                    <VKCell>
                        Three
                    </VKCell>
                </VKList>
            </VKGroup>
        </VKPanel>
    </VKView>
</template>

<script>
    export default {
        name: 'Groups'
    }
</script>
