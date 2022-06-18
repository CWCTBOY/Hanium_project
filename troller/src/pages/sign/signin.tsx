import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AnotherLogin from '../../components/sign/anotherLogin';
import SignForm, { ISignType } from '../../components/sign/signForm';
import { Form, InputBox, SubmitBtn } from '../../styles/sign/globalSignBox';

function Signin() {
	const { register, handleSubmit } = useForm<ISignType>();
	const onSubmit = (userAuth: ISignType) => {
		(async () => {
			const res = await (
				await fetch('temoporalUrl', {
					method: 'POST',
					headers: {
						'Content-Type': '/application.json',
					},
					body: JSON.stringify(userAuth),
				})
			).json();
		})();
		// res값으로 리다이렉트 판별 기능 추가
	};
	return (
		<SignForm>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InputBox>
					<div className="label">
						<span className="label__name">Email address</span>
					</div>
					<input
						{...register('email', {
							required: true,
						})}
						type="email"
					/>
				</InputBox>
				<InputBox>
					<div className="label">
						<span className="label__name">Password</span>
						<Link to="/forgot_pw">
							<span className="label__forgotpw">forgot password?</span>
						</Link>
					</div>
					<input
						{...register('password', {
							required: true,
						})}
					/>
				</InputBox>
				<SubmitBtn type="submit">Log In</SubmitBtn>
			</Form>
			<Link to="/sign_up">
				<SubmitBtn className="createAccount">Create Account</SubmitBtn>
			</Link>
			<AnotherLogin />
		</SignForm>
	);
}
export default Signin;
