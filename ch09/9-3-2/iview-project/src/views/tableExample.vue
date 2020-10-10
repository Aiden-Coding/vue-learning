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
        <Table :columns="columns" :data="tableData" size="small" ref="table"></Table>
        <br>
        <Button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> 导出所有的数据</Button>
        <Button type="primary" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon> 导出筛选后的数据</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns: [
                    {
                        "title": "名称",
                        "key": "name",
                        "fixed": "left",
                    },
                    {
                        "title": "显示",
                        "key": "show",
                        "sortable": true,
                        filters: [
                            {
                                label: '大于4000',
                                value: 1
                            },
                            {
                                label: '小于4000',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.show > 4000;
                            } else if (value === 2) {
                                return row.show < 4000;
                            }
                        }
                    },
                ],
                tableData: [
                    {
                        "name": "Name1",
                        "show": 7302,
                    },
                    {
                        "name": "Name2",
                        "show": 4720,
                    },
                    {
                        "name": "Name3",
                        "show": 7181,
                    },
                    {
                        "name": "Name4",
                        "show": 9911,
                    },
                    {
                        "name": "Name5",
                        "show": 934,
                    },
                    {
                        "name": "Name6",
                        "show": 6856,
                    },
                    {
                        "name": "Name7",
                        "show": 5107,
                    },
                    {
                        "name": "Name8",
                        "show": 862,
                    },
                ]
            }
        },
        methods: {
            exportData (type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: 'The original data'
                    });
                } else if (type === 2) {
                    this.$refs.table.exportCsv({
                        filename: 'Sorting and filtering data',
                        original: false
                    });
                }
            }
        }
    }
</script>
