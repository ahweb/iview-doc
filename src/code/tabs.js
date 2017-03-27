let code = {};

code.base = `
<template>
    <Tabs value="name1">
        <Tab-pane label="标签一" name="name1">标签一的内容</Tab-pane>
        <Tab-pane label="标签二" name="name2">标签二的内容</Tab-pane>
        <Tab-pane label="标签三" name="name3">标签三的内容</Tab-pane>
    </Tabs>
</template>
<script>
    export default {
        
    }
</script>
`;

code.disabled = `
<template>
    <Tabs>
        <Tab-pane label="标签一">标签一的内容</Tab-pane>
        <Tab-pane label="标签二" disabled>标签二的内容</Tab-pane>
        <Tab-pane label="标签三">标签三的内容</Tab-pane>
    </Tabs>
</template>
<script>
    export default {
        
    }
</script>
`;

code.icon = `
<template>
    <Tabs>
        <Tab-pane label="macOS" icon="social-apple">标签一的内容</Tab-pane>
        <Tab-pane label="Windows" icon="social-windows">标签二的内容</Tab-pane>
        <Tab-pane label="Linux" icon="social-tux">标签三的内容</Tab-pane>
    </Tabs>
</template>
<script>
    export default {
        
    }
</script>
`;

code.mini = `
<template>
    <Tabs size="small">
        <Tab-pane label="标签一">标签一的内容</Tab-pane>
        <Tab-pane label="标签二">标签二的内容</Tab-pane>
        <Tab-pane label="标签三">标签三的内容</Tab-pane>
    </Tabs>
</template>
<script>
    export default {
        
    }
</script>
`;

code.card = `
<template>
    <Tabs type="card">
        <Tab-pane label="标签一">标签一的内容</Tab-pane>
        <Tab-pane label="标签二">标签二的内容</Tab-pane>
        <Tab-pane label="标签三">标签三的内容</Tab-pane>
    </Tabs>
</template>
<script>
    export default {
        
    }
</script>
`;

code.closable = `
<template>
    <Tabs type="card" closable @on-tab-remove="handleTabRemove">
        <Tab-pane label="标签一" v-if="tab0">标签一的内容</Tab-pane>
        <Tab-pane label="标签二" v-if="tab1">标签二的内容</Tab-pane>
        <Tab-pane label="标签三" v-if="tab2">标签三的内容</Tab-pane>
    </Tabs>
</template>
<script>
    export default {
        data () {
            return {
                tab0: true,
                tab1: true,
                tab2: true
            }
        },
        methods: {
            handleTabRemove (name) {
                this['tab' + name] = false;
            }
        }
    }
</script>
`;

code.extra = `
<template>
    <Tabs type="card">
        <Tab-pane v-for="tab in tabs" :key="tab" :label="'标签' + tab">标签{{ tab }}</Tab-pane>
        <Button type="ghost" @click="handleTabsAdd" size="small" slot="extra" :disabled="tabs > 3">增加</Button>
    </Tabs>
</template>
<script>
    export default {
        data () {
            return {
                tabs: 2
            }
        },
        methods: {
            handleTabsAdd () {
                this.tabs ++;
            }
        }
    }
</script>
`;

code.animated = `
<template>
    <Tabs :animated="false">
        <Tab-pane label="标签一">标签一的内容</Tab-pane>
        <Tab-pane label="标签二">标签二的内容</Tab-pane>
        <Tab-pane label="标签三">标签三的内容</Tab-pane>
    </Tabs>
</template>
<script>
    export default {
        
    }
</script>
`;

code.style = `
<style>
    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content {
        height: 120px;
        margin-top: -16px;
    }

    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
        background: #fff;
        padding: 16px;
    }

    .demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
        border-color: transparent;
    }

    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
        border-color: #fff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
        border-radius: 0;
        background: #fff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
        border-top: 1px solid #3399ff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #3399ff;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
<template>
    <Row :gutter="32">
        <Col span="12" class="demo-tabs-style1" style="background: #e3e8ee;padding:16px;">
            <Tabs type="card">
                <Tab-pane label="标签一">标签一的内容</Tab-pane>
                <Tab-pane label="标签二">标签二的内容</Tab-pane>
                <Tab-pane label="标签三">标签三的内容</Tab-pane>
            </Tabs>
        </Col>
        <Col span="12" class="demo-tabs-style2">
            <Tabs type="card">
                <Tab-pane label="标签一">标签一的内容</Tab-pane>
                <Tab-pane label="标签二">标签二的内容</Tab-pane>
                <Tab-pane label="标签三">标签三的内容</Tab-pane>
            </Tabs>
        </Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;