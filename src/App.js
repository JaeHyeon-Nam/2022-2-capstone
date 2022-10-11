import React, { useState, Suspense } from "react";
import './css/styles.css'
import App2 from "./component/App2"


const Sidebar = React.lazy(() => import("./component/Sidebar"));





let data = [
  {
    name: "Home",
    icon: "home.png",
    link: "/customermanagement",
    options: [
      {
        name: "Branch Management",
        icon: "ico_branchmgmt.png",
        link: "/branchmanagement",
        menuItem: false
      },
      {
        name: "Merchant Management",
        icon: "ico_merchant.png",
        link: "/merchantmanagement",
        menuItem: false
      }
    ],
    menuItem: true
  },
  {
    name: "MyPage",
    icon: "user.png",
    link: "/programmanagement",
    options: [
      {
        name: "Branch Management",
        icon: "ico_branchmgmt.png",
        link: "/branchmanagement",
        menuItem: false
      },
      {
        name: "Merchant Management",
        icon: "ico_merchant.png",
        link: "/merchantmanagement",
        menuItem: false
      }
    ],
    menuItem: true
  },
  {
    name: "Cart",
    icon: "shopping.png",
    link: "/usermanagement",
    options: [
      {
        name: "Branch Management",
        icon: "ico_branchmgmt.png",
        link: "/branchmanagement",
        menuItem: false
      },
      {
        name: "Merchant Management",
        icon: "ico_merchant.png",
        link: "/merchantmanagement",
        menuItem: false
      }
    ],
    menuItem: true
  },
  {
    name: "QR",
    icon: "qr-code.png",
    link: "/entitymanagement",
    options: [
      {
        name: "Used",
        icon: "used.png",
        link: "/branchmanagement",
        menuItem: true
      },
      {
        name: "Not Using",
        icon: "notusing.png",
        link: "/merchantmanagement",
        menuItem: true
      }
    ],
    menuItem: true
  },
  {
    name: "Community",
    icon: "community.png",
    link: "/entitymanagement",
    options: [
      {
        name: "Used",
        icon: "used.png",
        link: "/branchmanagement",
        menuItem: false
      },
      {
        name: "Not Using",
        icon: "notusing.png",
        link: "/merchantmanagement",
        menuItem: false
      }
    ],
    menuItem: true
  },
  {
    name: "Map",
    icon: "map.png",
    link: "/entitymanagement",
    options: [
      {
        name: "Used",
        icon: "used.png",
        link: "/branchmanagement",
        menuItem: false
      },
      {
        name: "Not Using",
        icon: "notusing.png",
        link: "/merchantmanagement",
        menuItem: false
      }
    ],
    menuItem: true

  }
];



function App() {
  const [sidebar, setSidebar] = useState(true);
  const [minibar, setMinibar] = useState(true);

  const [openDrawer, updateDrawer] = useState(false);


  const toggleSidebar = bool => {
    setSidebar(bool);
  };

  const toggleMinibar = bool => {
    setMinibar(bool);
  };

  return (
    <div className="App">


      <Suspense fallback={<h6>Loading</h6>}>
        <Sidebar
          items={data}
          sidebar={sidebar}
          minibar={minibar}
          setMinibar={toggleMinibar}
        />
      </Suspense>
      <App2/>
    
    </div>
  );
}

export default App;
