// src/CalendarComponent.js

import React, { useState } from 'react';
import { Calendar, Modal, Button, Form, Input, List } from 'antd';

import moment from 'moment';

const CalendarComponent = () => {
  const [currentDate, setCurrentDate] = useState(moment()); // Ngày hiện tại
  const [events, setEvents] = useState([]); // Danh sách các sự kiện
  const [modalVisible, setModalVisible] = useState(false); // Hiển thị modal
  const [form] = Form.useForm(); // Form cho việc thêm sự kiện mới

  // Xử lý khi chọn ngày
  const onSelectDate = (date) => {
    setCurrentDate(date);
  };

  // Xử lý khi thêm sự kiện mới
  const handleAddEvent = (values) => {
    const newEvent = { date: currentDate, ...values };
    setEvents([...events, newEvent]);
    setModalVisible(false);
    form.resetFields();
  };

  // Render các sự kiện trong ngày
  const dateCellRender = (value) => {
    const dayEvents = events.filter(event => event.date.isSame(value, 'day'));
    return (
      <ul>
        {dayEvents.map((event, index) => (
          <li key={index}>{event.title}</li>
        ))}
      </ul>
    );
  };

  // Hiển thị các sự kiện trong ngày hiện tại
  const renderEventsForCurrentDay = () => {
    const dayEvents = events.filter(event => event.date.isSame(currentDate, 'day'));
    return (
      <List
        size="small"
        bordered
        dataSource={dayEvents}
        renderItem={item => <List.Item>{item.title}</List.Item>}
      />
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Calendar</h2>
      <Calendar
        dateCellRender={dateCellRender}
        onSelect={onSelectDate}
        fullscreen={true}
      />
      <div style={{ marginTop: '20px' }}>
        <h3>Events on {currentDate.format('YYYY-MM-DD')}</h3>
        {renderEventsForCurrentDay()}
        <Button type="primary" onClick={() => setModalVisible(true)} style={{ marginTop: '10px' }}>
          Add Event
        </Button>
      </div>
      <Modal
        title="Add Event"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleAddEvent}>
          <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please enter the title' }]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CalendarComponent;
