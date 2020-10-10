<style scoped lang="less">
    .index{
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        h1{
            height: 150px;
            img{
                height: 100%;
            }
        }
        h2{
            color: #666;
            margin-bottom: 200px;
            p{
                margin: 0 0 50px;
            }
        }
        .ivu-row-flex{
            height: 100%;
        }
    }
</style>
<template>
    <div class="index">
        <!--定义行-->
        <Row type="flex" justify="center" align="middle">
            <!--左侧的标志和按钮-->
            <Col span="12">
                <h1>
                    <img src="../images/logo.png">
                </h1>
                <h2>
                    <p>Welcome to your iView app!</p>
                    <Button type="ghost" @click="handleStartLeft">左侧 iView</Button>
                </h2>
            </Col>
            <!--右侧的标志和按钮-->
            <Col span="12">
            <h1>
                <img src="../images/logo.png">
            </h1>
            <h2>
                <p>Welcome to your iView app!</p>
                <Button type="ghost" @click="handleStartRight">右侧 iView</Button>
            </h2>
            </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
            <!--圆形搜索按钮primary-->
                <Button type="primary" shape="circle" icon="ios-search"></Button>
            <!--圆角搜索图标文字按钮，ghost-->
                <Button type="ghost" shape="circle" icon="ios-search">搜索</Button>
            <!--虚线按钮，普通形状，图标-->
                <Button type="dashed"  icon="ios-search"></Button>
            <!--文字按钮-->
                <Button type="text" icon="ios-search">搜索</Button>
            <!--info按钮，大-->
                <Button type="info" size="large">搜索</Button>
            <!--成功按钮，默认-->
                <Button type="success">搜索</Button>
            <!--警告按钮，小-->
                <Button type="warning" size="small">搜索</Button>
            </Col>
        </Row>
        <!--选择器-->
        <Select v-model="model7" style="width:200px">
            <OptionGroup label="水果">
                <Option v-for="item in list1" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </OptionGroup>
            <OptionGroup label="蔬菜">
                <Option v-for="item in list2" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </OptionGroup>
        </Select>

    </div>
</template>
<script>
    export default {
        data(){
            return{
                list1: [
                    {
                        value: '苹果',
                        label: 'apple'
                    },
                    {
                        value: '梨',
                        label: 'pear'
                    },
                ],
                list2: [
                    {
                        value: '卷心菜',
                        label: 'cabbage'
                    },
                ],
            }

        },
        methods: {
            handleStartLeft () {
                this.$Modal.info({
                    title: 'test',
                    content: '点击左侧的iview'
                });
            },
            handleStartRight() {
                this.$Modal.info({
                    title: 'test',
                    content:  '点击右侧的iview'
                });
            },
        }
    }
</script>
