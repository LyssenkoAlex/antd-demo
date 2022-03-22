import React, {useEffect, useState} from 'react';
import {Button, Form, InputNumber} from "antd";

const InputSet = (props) => {


    const [inputSet, setInputSet] = useState([])

    useEffect(() => {
        setInputSet(props.data)
    }, [])

    const elements = inputSet.map((item, i) => {
        return <Form.Item label={item.label} name={item.code} key={i} rules={[
            {
                required: item.required,
                message: 'This field is required!',
            },
            {
                type: 'number',
                message: `Please enter number! > ${item.min}  and < ${item.max}`,
                min:item.min,
                max:item.max
            },
        ]} htmlFor={item.name}>
            <InputNumber id={item.name} />
        </Form.Item>
    })

    const onFinish = (values) => {
        console.log("values: ", values)
    }


    return (
        <Form style={{padding:'24px', overflow:"auto", maxHeight:"500px"}}
              onFinish={onFinish}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
            initialValues={{
                remember: true,
            }}
        >
            {elements}


            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>


    )
}
export default InputSet
