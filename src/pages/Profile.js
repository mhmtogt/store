import React, { useState, useEffect } from "react";
import { Form, Input, Button, DatePicker, message } from "antd";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    birthDate: null,
  });

  useEffect(() => {
    // Simulated fetching user data from localStorage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setFormData({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        address: currentUser.address,
        birthDate: currentUser.birthDate,
      });
      console.log(currentUser);
    } else {
      message.error("Kullanıcı bilgileri bulunamadı.");
    }
  }, []);

  const onFinish = (values) => {
    console.log("Updated Profile:", values);
    // Here you can update the user profile data, e.g., send to server
    message.success("Profil güncellendi!");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        height: "100vh",
        backgroundColor: "#CC99FF",
      }}
    >
      <Form
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 20 }}
        style={{ marginTop: "50px" }}
        initialValues={formData} // Set initial values for the form
        onFinish={onFinish}
      >
        <Form.Item
          label={
            <span style={{ color: "#990099", fontWeight: "bold" }}>İsim</span>
          }
          name="firstName" // Form item name matches the key in formData
          rules={[{ required: true, message: "İsim alanı boş geçilemez!" }]}
        >
          <Input
            style={{
              backgroundColor: "#FFCCFF",
              color: "#990099",
              borderColor: "#990099",
              width: "250px",
            }}
            initialValue={formData.firstName} // formData state'indeki firstName değeri
          />
        </Form.Item>

        <Form.Item
          label={
            <span style={{ color: "#990099", fontWeight: "bold" }}>
              Soyisim
            </span>
          }
          name="lastName" // Form item name matches the key in formData
          rules={[{ required: true, message: "Soyisim alanı boş geçilemez!" }]}
        >
          <Input
            style={{
              backgroundColor: "#FFCCFF",
              color: "#990099",
              borderColor: "#990099",
              width: "250px",
            }}
            initialValue={formData.lastName} // formData state'indeki lastName değeri
          />
        </Form.Item>

        <Form.Item
          label={
            <span style={{ color: "#990099", fontWeight: "bold" }}>Adres</span>
          }
          name="address" // Form item name matches the key in formData
          rules={[{ required: true, message: "Adres alanı boş geçilemez!" }]}
        >
          <Input
            style={{
              backgroundColor: "#FFCCFF",
              color: "#990099",
              borderColor: "#990099",
              width: "250px",
            }}
            initialValue={formData.address}
          />
        </Form.Item>

        <Form.Item
          label={
            <span style={{ color: "#990099", fontWeight: "bold" }}>
              Doğum tarihi
            </span>
          }
          name="birthDate" // Form item name matches the key in formData
          rules={[
            { required: true, message: "Doğum tarihi alanı boş geçilemez!" },
          ]}
        >
          <DatePicker
            format="YYYY-MM-DD"
            style={{
              backgroundColor: "#FFCCFF",
              color: "#990099",
              borderColor: "#990099",
              width: "250px",
            }}
            initialValue={formData.birthDate} // formData state'indeki birthDate değeri
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 11, span: 30 }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "#990099",
              color: "#FFCCFF",
              marginLeft: "10px",
            }}
          >
            Bilgileri güncelle
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Profile;
