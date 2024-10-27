import { RotatingLines } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className="loader-container">
            <RotatingLines
  visible={true}
  height="96"
  width="96"
  color='red'
  strokeColor='red'
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </div>
    )
}

export default Loader