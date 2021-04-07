<template>
    <el-container>
        <el-container>
            <el-col>
                <el-form>
                    <el-form-item label="选择国家">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option  v-for="country in countrylist" v-bind:key="country" v-bind:label="country" v-bind:value="country"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="选择指标">
                        <el-select v-model="form.type" placeholder="请选择可持续发展指标">
                            <el-option  v-for="code in codelist" v-bind:key="code" v-bind:label="code" v-bind:value="code"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col>
                <div>{{selectcountrylist}}</div>
            </el-col>
        </el-container>

    </el-container>

</template>

<script>
    //
    const axios = require('axios');
    export default {
        name: "GetData",
        data()
        {
            return{
                countrylist:[

                ],
                codelist:[

                ],
                selectcountrylist:{
                    country: {
                        cname: '',
                        ccode: '',
                    }
                },
                form: {
                    region:null,
                    type:null
                }
            }
        },
        mounted() {
            axios.get('http://172.21.213.66:8080/api/GetData').then(response => {
                this.countrylist= response.data;
                console.log(response.data);
                console.log(this.country.ccode)
            });
            axios.get('http://172.21.213.66:8080/api/GetData2').then(response => {
                this.codelist = response.data;
                console.log(response.data);
                console.log(this.country.ccode)
            });

        },
        methods:{
            onSubmit:function()
            {
                let formData=new FormData();
                for(let key in this.form)
                {
                    formData.append(key,this.form[key]);
                    console.log(formData.get[key]);
                }
                axios({
                    method:"post",
                    url:"http://localhost:8080/api/SelectData",
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                    //withCredentials:true,
                    data:formData
                }).then(response=> {
                    this.selectcountrylist=response.data
                }).catch(
                    console.log("error")
                );

                console.log(this.selectcountrylist);
                console.log('submit')
            }
        }
    }


</script>

<style scoped>
  h1 {
    font-weight: normal;
  }
</style>
