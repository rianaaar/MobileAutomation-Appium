describe('Go to Home Page',() => {
    it('filling valid form and go to Home', async() => {
        await $("//android.view.ViewGroup/android.widget.TextView[1]");
        await $("//android.widget.FrameLayout/android.widget.EditText").setValue('are');
        await $("//android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText").setValue("45");
        await $("//android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.EditText").setValue("150");
        await $("//android.widget.RadioGroup/android.widget.RadioButton[2]").click();
        await $("//android.view.ViewGroup/android.widget.Button").click();
        await $("//android.widget.RadioGroup/android.widget.RadioButton[1]").click();
        await $("//android.view.ViewGroup/android.widget.Button").click();
        await expect(await $("//android.widget.FrameLayout[@content-desc='Home']/android.view.ViewGroup/android.widget.TextView")).toHaveText('Home');
        driver.closeApp();
    }),
    it('filling form with invalid data', async() => {
        driver.launchApp();
        await $("//android.view.ViewGroup/android.widget.TextView[1]");
        await $("//android.widget.FrameLayout/android.widget.EditText").setValue('are');
        await $("//android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText").setValue("45");
        //await $("//android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.EditText").setValue("150");
        await $("//android.widget.RadioGroup/android.widget.RadioButton[2]").click();
        await $("//android.view.ViewGroup/android.widget.Button").click();
        await expect(await $("//android.widget.LinearLayout/android.widget.TextView")).toBeExisting();
        driver.closeApp();
    })
})