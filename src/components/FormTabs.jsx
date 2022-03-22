import React from 'react';
import {Tabs} from "antd";
import InputSet from "./InputSet";
import data from '../data/data.json'


const { TabPane } = Tabs;

const FormTabs = () => {
return (
    <Tabs defaultActiveKey="1" style={{padding:'24px'}} type="card" >
            <TabPane tab={`Tab-1`} key={1}>
                <InputSet data={data.input_elements_x}/>
            </TabPane>
        <TabPane tab={`Tab-2`} key={2}>
            <InputSet data={data.input_elements_y}/>
        </TabPane>
    </Tabs>
)
}

export default FormTabs
