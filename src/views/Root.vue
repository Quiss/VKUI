<template>
  <VKRoot :activeView="rootPanelState">
    <VKView activePanel="panel1.1" id="view1">
      <VKPanel id="panel1.1">
        <VKPanelHeader>View 1</VKPanelHeader>
        <VKGroup>
          <VKCellButton @click="rootPanelState = 'view2'">
            Open View 2
          </VKCellButton>
        </VKGroup>
      </VKPanel>
    </VKView>
    <VKView header activePanel="panel2.1" id="view2">
      <VKPanel id="panel2.1">
        <VKPanelHeader>View 2</VKPanelHeader>
        <VKGroup>
          <VKCellButton @click="rootPanelState = 'view1'">
            Back to View 1
          </VKCellButton>
        </VKGroup>
      </VKPanel>
    </VKView>
  </VKRoot>
</template>

<script>

  export default {
    name: 'Root',
    data: () => {
      return {
        rootPanelState: 'view1',
      }
    },
  }
</script>
