<style scoped lang="less">
    .index {
        width: 80%;
        position: absolute;
        top: 10%;
        bottom: 0;
        left: 10%;
        text-align: center;
        h1 {
            height: 150px;
            img {
                height: 100%;
            }
        }
        h2 {
            color: #666;
            margin-bottom: 200px;
            p {
                margin: 0 0 50px;
            }
        }
        .ivu-row-flex {
            height: 100%;
        }
    }
</style>
<template>
    <div class="index">
        <Form :model="formItem" :label-width="80">
            <FormItem label="Input">
                <!--input组件-->
                <Input v-model="formItem.input" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="Select">
                <!--select组件-->
                <Select v-model="formItem.select">
                    <Option value="beijing">New York</Option>
                    <Option value="shanghai">London</Option>
                    <Option value="shenzhen">Sydney</Option>
                </Select>
            </FormItem>
            <FormItem label="DatePicker">
                <Row>
                    <Col span="11">
                    <!--日期选择组件-->
                    <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                    </Col>
                    <Col span="2" style="text-align: center">
                    -</Col>
                    <Col span="11">
                    <!--时间选择组件-->
                    <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
                    </Col>
                </Row>
            </FormItem>
            <FormItem label="Radio">
                <!--单选组件-->
                <RadioGroup v-model="formItem.radio">
                    <Radio label="male">Male</Radio>
                    <Radio label="female">Female</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="Checkbox">
                <!--多选组件-->
                <CheckboxGroup v-model="formItem.checkbox">
                    <Checkbox label="Eat"></Checkbox>
                    <Checkbox label="Sleep"></Checkbox>
                    <Checkbox label="Run"></Checkbox>
                    <Checkbox label="Movie"></Checkbox>
                </CheckboxGroup>
            </FormItem>
            <FormItem label="Switch">
                <!--开关组件-->
                <i-switch v-model="formItem.switch" size="large">
                    <span slot="open">On</span>
                    <span slot="close">Off</span>
                </i-switch>
            </FormItem>
            <FormItem label="Slider">
                <!--滑动组件-->
                <Slider v-model="formItem.slider" range></Slider>
            </FormItem>
            <FormItem label="Text">
                <!--文本框组件-->
                <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                       placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem>
                <Button type="primary">Submit</Button>
                <Button type="ghost" style="margin-left: 8px">Cancel</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        }
        ,
        methods: {}
    }
</script>
