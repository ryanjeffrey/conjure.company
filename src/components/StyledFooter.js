import React from 'react'

const StyledFooter = () => {
    return (
      <div
        style={{
          display: "flex",
          backgroundColor: "#121212",
        }}
      >
        <footer
          style={{
            backgroundColor: "#121212",
            color: "#F7F4F0",
            padding: "48px",
            margin: "0 auto",
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
