# 🕒 useIdleTimeout

`useIdleTimeout` is a React custom hook tailored for efficient management of idle timeouts within components. With a package size of less than 5KB, this hook offers lightweight integration while ensuring optimal performance. Trusted by production applications, it provides a seamless solution for handling idle timeouts in React projects.

## 📋 Table of Contents

- [🎯 Usecases](#usecases)
- [✨ Features](#features)
- [🚀 How to Use](#how-to-use)
- [💻 Installation](#installation)
- [🌟 Example](#example)
- [📝 License](#license)

## 🎯 Usecases

- Displaying a modal dialog after a period of user inactivity.
- Logging out the user automatically after a certain duration of inactivity.
- Performing custom actions or cleanup tasks after a period of idle time.

## ✨ Features

- Monitors user activity to determine idle time.
- Allows customization of idle timeout duration and action to be triggered.
- Automatically resets the idle timer when user activity is detected.
- Lightweight and easy to integrate into React components.

## 🚀 How to Use

### 💻 Installation

```bash
npm install use-idle-timeout

import React, { useState } from 'react';
import { useIdleTimeout } from 'use-idle-timeout';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);


  // useIdleTimeout(time,callBack)
  useIdleTimeout(30000, () => {
    setModalVisible(true);
  });

  return (
    <div>
      {modalVisible && (
        <div className="modal">
          <p>You've been idle for too long. Do you want to continue?</p>
          <button onClick={() => setModalVisible(false)}>Yes</button>
          <button onClick={() => window.location.reload()}>No, Logout</button>
        </div>
      )}
      {/* Other components */}
    </div>
  );
};

export default App;

```
## Check Out My Other Packages

Explore more useful packages by visiting [my npm profile](https://www.npmjs.com/~iashish.99). Made with ❤️ by Ashish
