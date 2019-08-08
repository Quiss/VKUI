<template>
    <VKEpic :activeStory="activeStory">
        <VKTabbar slot="tabbar">
            <VKTabbarItem :selected="activeStory === 'feed'" @click="activeStory = 'feed'" >
                <vkui-icon name="newsfeed" :size="28"/>
            </VKTabbarItem>
            <VKTabbarItem :selected="activeStory === 'feed'" @click="activeStory = 'feed'">
                <vkui-icon name="search" :size="28"/>
            </VKTabbarItem>
            <VKTabbarItem :selected="activeStory === 'feed'" @click="activeStory = 'feed'">
                <vkui-icon name="messages" :size="28"/>
            </VKTabbarItem>
            <VKTabbarItem :selected="activeStory === 'feed'" @click="activeStory = 'feed'" >
                <vkui-icon name="notifications" :size="28"/>
            </VKTabbarItem>
            <VKTabbarItem :selected="activeStory === 'feed'" @click="activeStory = 'feed'" >
                <vkui-icon name="more" :size="28"/>
            </VKTabbarItem>
        </VKTabbar>
        <VKView id="feed" activePanel="feed">
            <VKPanel id="feed">
                <VKPanelHeader>Feed</VKPanelHeader>
            </VKPanel>
        </VKView>
        <VKView id="discover" activePanel="discover">
            <VKPanel id="discover">
                <VKPanelHeader>Discover</VKPanelHeader>
            </VKPanel>
        </VKView>
        <VKView id="messages" activePanel="messages">
            <VKPanel id="messages">
                <VKPanelHeader>Messages</VKPanelHeader>
            </VKPanel>
        </VKView>
        <VKView id="notifications" activePanel="notifications">
            <VKPanel id="notifications">
                <VKPanelHeader>Notifications</VKPanelHeader>
            </VKPanel>
        </VKView>
        <VKView id="more" activePanel="more">
            <VKPanel id="more">
                <VKPanelHeader>More</VKPanelHeader>
            </VKPanel>
        </VKView>
    </VKEpic>
</template>

<script>
    export default {
        name: 'Home',
        data: () => {
            return {
                activeStory: 'more',
            }
        },
    }
</script>
