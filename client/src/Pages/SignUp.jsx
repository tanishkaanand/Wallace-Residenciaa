import SignUpForm from "../Components/SignUpForm"

function SignUp() {

  return (

    <div className='TextCenter'>
            <h1>Sign Up</h1>
            <div className="">
                <div className="Center">
                    <div className="FitInSizedBox Center neonBox FormBox">
                      <SignUpForm />
                    </div>
                </div>
            </div>
        </div>
  );
}

export default SignUp;