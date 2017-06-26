dmc-signinemail.EndpointsPage__signinEmail
  dmc-textinput(text="{ email }" type="email" placeholder="e-mail" onChange="{ handleEmailChange }")
  dmc-textinput(text="{ password }" type="password" placeholder="password" onChange="{ handlePasswordChange }")
  dmc-button(onPat="{ handleSigninPat }" label="サインイン")

  script.
    import '../../atoms/dmc-button/index.tag';
    import '../../atoms/dmc-textinput/index.tag';
    import script from './signinemail';
    this.external(script);