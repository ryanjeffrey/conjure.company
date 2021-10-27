import React from 'react'

const StyledFooter = () => {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        <footer
          style={{
            color: "#F7F4F0",
            padding: "48px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <p
            style={{
              textAlign: "center",
              margin: "0",
            }}
          >
            &copy; {new Date().getFullYear()} RSC CREATIVE LLC
            <br /> CHICAGO, ILLINOIS
          </p>
        </footer>
      </div>
    )
}

export default StyledFooter
