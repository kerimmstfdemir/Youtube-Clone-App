/* eslint-disable react/jsx-no-target-blank */
const Footer = () => {
    return (
      <div>
        <footer className="flex flex-col items-center bottom-0 left-0 w-full bg-[#333333] text-[#FAFAFA] py-4 ">
          <p>
            © {new Date().getFullYear()} Copyright 
          </p> 
            <p>
            Developed by{" "}
            <a
              target="_blank"
              className="text-white underline"
              href="https://github.com/kerimmstfdemir"
            >
              Kerim Mustafa DEMİR
            </a>
          </p>
        </footer>
      </div>
    )
  }
  
  export default Footer