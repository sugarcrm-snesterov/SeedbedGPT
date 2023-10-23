# Cypress changes

in cypress.config.ts defaultCommandTimeout: 60000,

in cypress/support/api.js
row 167=> // expect([200, 404]).to.include(response.status);

# GPT version

gpt-4

## MAIN prompt

I want you to create a user story and Cypress tests for the scenario of a user logging into the site and creating an account. User actions:

1. The user needs to go to the page http://localhost:9001, enter the username 'max' and password 'max' into the fields `username` and `password`, and click the `login` button.
2. Wait for the appearance of the global search screen with the visible `three dots` right menu button.
3. On the global search screen, open the right sidebar menu by clicking the `three dots` in the upper right corner.
4. Select the `create account` option from the right sidebar menu.
5. On the account creation page, fill in the `name` field with the value 'test', which is mandatory.
6. Click the `save` button.
7. After that, a window should open in the `header` with the name of the account entered in step 5 in the name field.
8. Open the `left sidebar` menu by clicking the three horizontal lines on the left.
9. Select the `Accounts` option from this menu.
10. This should open a window with a list, and one of the `list item` elements will be the record with the name of the account entered in step 5 in the name field.

## System prompt

Act as a quality analyst who is highly experienced in gherkin and cypress. Write chunks of code without backticks. You should return the modified response in its entirety, not just the changed lines.
Please indicate all the elements you need to interact with by wrapping them in curly braces. For example, "{button}", then you must find the corresponding HTML tags below.

{username}= <div class="field">
<label class="field__label">Username</label>

<div class="field__controls">
<span class="input-wrapper not-empty">
<input type="text" size="35" tabindex="1" id="username" name="username" value="admin" autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false">
<i class="icondefault icon icon-remove clear-button"></i>
        </span>
    </div>
</div>

{password}= <div class="field">
<label class="field__label">Password</label>

<div class="field__controls">
<span class="input-wrapper">
<input type="password" size="26" tabindex="2" id="password" name="password" value="" autocomplete="off" spellcheck="false">
<i class="icondefault icon icon-remove clear-button"></i>
    </span>
    </div>

</div>

{login}= <a href="javascript:void(0)" id="login_btn" class="btn btn--primary btn--large fast-click-highlighted" draggable="false">Log In</a>

{not right now}= <a class="btn btn--secondary btn--large btn-cancel fast-click-highlighted" data-id="cancel" draggable="false">Not right now</a>

{three dots}= <a href="javascript:void(0)" class="createBtn launch create-entity fast-click-highlighted" aria-label="Right menu button" draggable="false">

{create_account}= <a class="menu-item__link" href="#" action="create-Accounts-record" draggable="false">
<span class="menu-item__icon" aria-hidden="true">
<span class="label-module-sm label-Accounts has-icon-inside  label-module--bg-transparent  " aria-hidden=" true">
<i class="icondefault sicon sicon-account-lg"></i>
</span>
</span>
<span class="menu-item__label" label="Create Account">
Create Account
</span>
</a>

{name}= <div class="field">
<label class="field__label">Name</label>

<div class="field__controls">
<span class="input-wrapper">
<input type="text" placeholder="Required" autocorrect="off" value="">
<i class="icondefault icon icon-remove clear-button"></i>
</span>
</div>
</div>

{save} = <div class="header__btn--save header__btn fast-click-highlighted  ">
Save

</div>

{header} = <a class="box_detail__title" draggable="false">
<span class="field-wrapper " sfuuid="192"><div class="field-detail">
<span class="field-detail__label">Name</span>
<span class="field-detail__value">test</span>

</div>
</span>
</a>

{left sidebar}= <a href="javascript:void(0)" class="logo menuBtn fast-click-highlighted" aria-label="Home button" draggable="false">
<i class="icondefault icon icon-bars "></i>
<span class="offline-status status-success"><span class="offline-icon status-success"></span>
</span>
</a>

{Accounts}= <a href="#Accounts" class="menu-item__link" draggable="false">
<span class="label-module-sm label-Accounts has-icon-inside  label-module--bg-transparent  " aria-hidden=" true">
<i class="icondefault sicon sicon-account-lg"></i>
</span>
<span class="menu-item__label">Accounts</span>
</a>

{list item}= <article data-id="3390d938-c02e-465c-b249-16783c318942" module="Accounts" class="
        list-item
        fast-click-highlighted
         has-drag-menu 
         has-menu 
         list-item--panels
        ">

<div class="txt has-access ">
<div class="list-item__panels">
<div class="list-item__panel list-item__panel--main">
<div class="panel-row panel-row--title">
<span class="field-wrapper " sfuuid="442"><span class="field-list field-value">test</span></span>  
 </div>
<div class="panel-row ">
<span class="field-wrapper " sfuuid="443"></span>
<span class="field-wrapper " sfuuid="444"></span>
</div>
<div class="panel-row ">
<span class="field-wrapper " sfuuid="445"></span>
<span class="field-wrapper " sfuuid="446"></span>
</div>
<div class="panel-row ">
<span class="field-wrapper " sfuuid="447"></span>
<span class="field-wrapper " sfuuid="448"></span>
</div>
<div class="panel-row">
<span class="field-wrapper " sfuuid="449"><span class="field-list field-value">2023-10-19 18:44</span></span>
</div>
</div>
<div class="list-item__panel list-item__panel--sidebar">
<div class="panel-row">
<span class="field-wrapper " sfuuid="450"></span>
</div>
<div class="panel-row">
<span class="field-wrapper " sfuuid="451"></span>
</div>
<div class="panel-row">
<span class="field-wrapper " sfuuid="452"></span>
</div>
<div class="panel-row">
<span class="field-wrapper " sfuuid="453"></span>
</div>
</div>
</div>
    </div>
            <div class="menu-container"></div>
        <div class="list-item__multi-select">
    <i class="icondefault icon icon-check-square checkbox-icon checkbox-icon--on"></i>
    <i class="icondefault icon icon-square-o checkbox-icon checkbox-icon--off"></i>
</div>
</article>
