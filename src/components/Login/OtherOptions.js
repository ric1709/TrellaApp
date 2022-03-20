import React from 'react'
import styled from 'styled-components'
import OptionButtons from '../../ui/OptionButtons'

const Styledoptions = styled.div`
	margin: 0 auto 20px;
	div {
		margin: 16px auto;
		text-align: center;
	}
`

function OtherOptions(props) {
	return (
		<Styledoptions>
			<div>ИЛИ</div>
			<OptionButtons
				url={
					'https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.321/static/media/google-logo.e086107b.svg'
				}
				alt={'Google'}
				title={'Войти с помощью Google'}
			/>
			<OptionButtons
				url={
					'https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.321/static/media/microsoft-logo.42b61fa1.svg'
				}
				alt={'Microsoft'}
				title={'Войти с помощью Майкрософт'}
			/>
			<OptionButtons
				url={
					'https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.321/static/media/apple-logo.4f2453fb.svg'
				}
				alt={'Apple'}
				title={'Войти с помощью Apple'}
			/>
			<OptionButtons
				url={
					'https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.321/static/media/slack-logo.0390f069.svg'
				}
				alt={'Slack'}
				title={'Войти с помощью Slack'}
			/>
		</Styledoptions>
	)
}

export default OtherOptions
