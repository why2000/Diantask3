# Dian Contacts

本模块的作用是提供Dian团队联系人管理页面的CRUD接口

## Add Contact

### HTTP Method

```
[POST]
```

### Path

```
/contacts
```

### Post Body参数

示例

```JSON
{
    "phone": "18827054816",
    "name": "郭宇",
    "email": "test@gmail.com"
}
```

字段说明
|字段|类型|说明|样例|是否必需|
|:---:|:---:|:---:|:---:|:---:|
|phone|string|中国大陆11位手机号|18827046729|是|
|name|string|人名，3-30个字符，只允许字母和数字|abc|是|
|email|string|邮件地址|test@gmail.com|否|

### Response

样例
```JSON
{
  "result": {
    "phone": "18827054813",
    "name": "yshan",
    "email": "email@email.com",
    "contact_id": "5a2fa038874a0e1afc9a65f1"
  }
}
```
字段说明
|字段|类型|说明|样例|是否必需|
|:---:|:---:|:---:|:---:|:---:|
|contact_id|string|联系人ID|5a2f9d59a0c1b022d89277f2|是|
|phone|string|中国大陆11位手机号|18827046729|是|
|name|string|人名，3-30个字符，只允许字母和数字|abc|是|
|email|string|邮件地址|test@gmail.com|否|

### 错误码
|错误码|说明|
|:---:|:---:|
|600|请求参数无效|

## Delete Contact

### HTTP Method
```
DELETE
```

### Path
```
/contacts/{:contact_id}
```

### Response

样例
```JSON
{
  "result": {
    "phone": "18827054813",
    "name": "yshan",
    "email": "email@email.com",
    "contact_id": "5a2fa038874a0e1afc9a65f1"
  }
}
```

字段说明

|字段|类型|说明|样例|是否必需|
|:---:|:---:|:---:|:---:|:---:|
|contact_id|string|联系人ID|5a2f9d59a0c1b022d89277f2|是|
|phone|string|中国大陆11位手机号|18827046729|是|
|name|string|人名，3-30个字符，只允许字母和数字|abc|是|
|email|string|邮件地址|test@gmail.com|否|

### 错误码
|错误码|说明|
|:---:|:---:|
|600|请求参数无效|

## Query All Contacts

### HTTP Method
```
[GET]
```

### Path
```
/contacts
```

### Response

样例
```JSON
{
  "result": [
    {
      "phone": "18827054813",
      "name": "yshan",
      "email": "email@email.com",
      "contact_id": "5a2f9d59a0c1b022d89277f2"
    },
    {
      "phone": "18827054813",
      "name": "yshan",
      "email": "email@email.com",
      "contact_id": "5a2f9e27b29fca2ac431b90a"
    },
    {
      "phone": "18827054813",
      "name": "yshan",
      "email": "email@email.com",
      "contact_id": "5a2f9fc1874a0e1afc9a65f0"
    },
    {
      "phone": "18827054813",
      "name": "yshan",
      "email": "email@email.com",
      "contact_id": "5a2fa038874a0e1afc9a65f1"
    }
  ]
}
```

字段说明

|字段|类型|说明|样例|是否必需|
|:---:|:---:|:---:|:---:|:---:|
|contact_id|string|联系人ID|5a2f9d59a0c1b022d89277f2|是|
|phone|string|中国大陆11位手机号|18827046729|是|
|name|string|人名，3-30个字符，只允许字母和数字|abc|是|
|email|string|邮件地址|test@gmail.com|否|

### 错误码
|错误码|说明|
|:---:|:---:|
|600|请求参数无效|

## Update Contact

### HTTP Method

```
[PUT]
```

### Path

```
/contacts/{:contact_id}
```

### Post Body参数

样例
```JSON
{
    "phone": "18827054816",
    "name": "郭宇",
    "email": "test@gmail.com"
}
```

字段说明
|字段|类型|说明|样例|是否必需|
|:---:|:---:|:---:|:---:|:---:|
|contact_id|string|联系人ID|5a2f9d59a0c1b022d89277f2|是|
|phone|string|中国大陆11位手机号|18827046729|是|
|name|string|人名，3-30个字符，只允许字母和数字|abc|是|
|email|string|邮件地址|test@gmail.com|否|

### 错误码
|错误码|说明|
|:---:|:---:|
|600|请求参数无效|