module.exports = {
  defaultTemplate: [
    {
      type: 'NEWORDER',
      original_template: {
        en: {
          body: '<p>Hello {{recipientName}}</p><p>\n\nYour Order {{orderId}} has been submitted successfully. we will inform you with recent updates concerning your order within few days.</p><p>we are glad that you enjoyed our offered products.\n\nwe hope that we will always be at your best to satisfy your needs.\n\nTo follow up your orders:\n{{orderPageUrl}}</p>',
          title: 'New Order'
        },
        ar: {
          body: '<div paragraphname="paragraph0" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;"><div paragraphname="paragraph0"><span id="noHighlight_0.1895808826032197">مرحبا&nbsp;</span><span style="color: rgb(69, 97, 119); font-family: Dubai-Regular, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">{{recipientName}}</span></div><div paragraphname="paragraph2"><span id="noHighlight_0.1311374920922841">تم إرسال طلبك&nbsp;</span><span style="color: rgb(69, 97, 119); font-family: Dubai-Regular, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">{{orderId}}</span>&nbsp;بنجاح. سنقوم بابلاغك بالتحديثات الاخيره المتعلقة بطلبك في غضون أيام قليله.</div><div paragraphname="paragraph2"><span id="noHighlight_0.1311374920922841"> نحن سعداء لأنك استمتعت بالمنتجات المعروضة لدينا. ونامل ان نقدم دائما افضل ما لدينا لتلبيه احتياجاتكم. لمتابعه طلباتك:&nbsp;</span><span style="color: rgb(69, 97, 119); font-family: Dubai-Regular, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">{{orderPageUrl}}</span></div></div>',
          title: 'طلب جديد'
        }
      },
      template: {
        en: {
          body: '<p>Hello {{recipientName}}</p><p>\n\nYour Order {{orderId}} has been submitted successfully. we will inform you with recent updates concerning your order within few days.</p><p>we are glad that you enjoyed our offered products.\n\nwe hope that we will always be at your best to satisfy your needs.\n\nTo follow up your orders:\n{{orderPageUrl}}</p>',
          title: 'New Order'
        },
        ar: {
          body: '<div paragraphname="paragraph0" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;"><div paragraphname="paragraph0"><span id="noHighlight_0.1895808826032197">مرحبا&nbsp;</span><span style="color: rgb(69, 97, 119); font-family: Dubai-Regular, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">{{recipientName}}</span></div><div paragraphname="paragraph2"><span id="noHighlight_0.1311374920922841">تم إرسال طلبك&nbsp;</span><span style="color: rgb(69, 97, 119); font-family: Dubai-Regular, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">{{orderId}}</span>&nbsp;بنجاح. سنقوم بابلاغك بالتحديثات الاخيره المتعلقة بطلبك في غضون أيام قليله.</div><div paragraphname="paragraph2"><span id="noHighlight_0.1311374920922841"> نحن سعداء لأنك استمتعت بالمنتجات المعروضة لدينا. ونامل ان نقدم دائما افضل ما لدينا لتلبيه احتياجاتكم. لمتابعه طلباتك:&nbsp;</span><span style="color: rgb(69, 97, 119); font-family: Dubai-Regular, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif;">{{orderPageUrl}}</span></div></div>',
          title: 'طلب جديد'
        }
      },
      key: ['{{recipientName}}', '{{orderId}}', '{{orderPageUrl}}']
    },
    {
      type: 'NEWUSER',
      original_template: {
        en: {
          body: '<p>Hello {{recipientName}}</p><p>Welcome to SuppliesOn.com your way to find the most valuable products and enjoy special prices. we are keen to offer you best services that will satisfy your needs.</p><p>Feel free to take a tour in SuppliesOn</p><p>{{loginPageUrl}}</p>',
          title: 'Welcome to SupplierOn.com'
        },
        ar: {
          body: '<p><span id="noHighlight_0.4871362304448914" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">مرحبا {{<span style="color: rgb(69, 97, 119); font-family: Dubai-Regular, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; letter-spacing: 0.14px;">recipientName</span>}}</span></p><p><span id="noHighlight_0.4871362304448914" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;"> اهلا بك في SuppliesOn.com طريقك للحصول علي المنتجات الأكثر قيمه والتمتع بأسعار خاصه. نحن حريصون علي تقديم أفضل الخدمات التي تلبي احتياجاتك. لا&nbsp;</span><span srcinfo="189:192" dstinfo="163:167" paragraphname="paragraph0" issource="false" id="ouHighlight__189_192TO163_167" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">تتردد</span><span id="noHighlight_0.9415749094358357" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">في&nbsp;</span><span srcinfo="199:200" dstinfo="172:177" paragraphname="paragraph0" issource="false" id="ouHighlight__199_200TO172_177" class="" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">القيام</span><span id="noHighlight_0.8569591568325368" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">&nbsp;</span><span srcinfo="209:212" dstinfo="179:182" paragraphname="paragraph0" issource="false" id="ouHighlight__209_212TO179_182" class="" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">بجولة</span><span id="noHighlight_0.5125643559384416" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">&nbsp;</span><span srcinfo="214:215" dstinfo="185:186" paragraphname="paragraph0" issource="false" id="ouHighlight__214_215TO185_186" class="" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">في موقعنا</span></p><p><span id="noHighlight_0.018340641513925116" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">&nbsp;</span><span srcinfo="228:228" dstinfo="195:195" paragraphname="paragraph0" issource="false" id="ouHighlight__228_228TO195_195" class="" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">{</span><span srcinfo="229:229" dstinfo="196:196" paragraphname="paragraph0" issource="false" id="ouHighlight__229_229TO196_196" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">{</span><span srcinfo="242:242" dstinfo="206:206" paragraphname="paragraph0" issource="false" id="ouHighlight__242_242TO206_206" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;"><span style="color: rgb(69, 97, 119); font-family: Dubai-Regular, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; letter-spacing: 0.14px;">loginPageUrl</span>}</span><span srcinfo="243:243" dstinfo="207:207" paragraphname="paragraph0" issource="false" id="ouHighlight__243_243TO207_207" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">}</span></p>',
          title: 'مرحبا بك في SuppliesOn.com'
        }
      },
      template: {
        en: {
          body: '<p>Hello {{recipientName}}</p><p>Welcome to SuppliesOn.com your way to find the most valuable products and enjoy special prices. we are keen to offer you best services that will satisfy your needs.</p><p>Feel free to take a tour in SuppliesOn</p><p>{{loginPageUrl}}</p>',
          title: 'Welcome to SupplierOn.com'
        },
        ar: {
          body: '<p><span id="noHighlight_0.4871362304448914" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">مرحبا {{<span style="color: rgb(69, 97, 119); font-family: Dubai-Regular, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; letter-spacing: 0.14px;">recipientName</span>}}</span></p><p><span id="noHighlight_0.4871362304448914" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;"> اهلا بك في SuppliesOn.com طريقك للحصول علي المنتجات الأكثر قيمه والتمتع بأسعار خاصه. نحن حريصون علي تقديم أفضل الخدمات التي تلبي احتياجاتك. لا&nbsp;</span><span srcinfo="189:192" dstinfo="163:167" paragraphname="paragraph0" issource="false" id="ouHighlight__189_192TO163_167" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">تتردد</span><span id="noHighlight_0.9415749094358357" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">في&nbsp;</span><span srcinfo="199:200" dstinfo="172:177" paragraphname="paragraph0" issource="false" id="ouHighlight__199_200TO172_177" class="" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">القيام</span><span id="noHighlight_0.8569591568325368" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">&nbsp;</span><span srcinfo="209:212" dstinfo="179:182" paragraphname="paragraph0" issource="false" id="ouHighlight__209_212TO179_182" class="" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">بجولة</span><span id="noHighlight_0.5125643559384416" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">&nbsp;</span><span srcinfo="214:215" dstinfo="185:186" paragraphname="paragraph0" issource="false" id="ouHighlight__214_215TO185_186" class="" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">في موقعنا</span></p><p><span id="noHighlight_0.018340641513925116" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">&nbsp;</span><span srcinfo="228:228" dstinfo="195:195" paragraphname="paragraph0" issource="false" id="ouHighlight__228_228TO195_195" class="" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">{</span><span srcinfo="229:229" dstinfo="196:196" paragraphname="paragraph0" issource="false" id="ouHighlight__229_229TO196_196" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">{</span><span srcinfo="242:242" dstinfo="206:206" paragraphname="paragraph0" issource="false" id="ouHighlight__242_242TO206_206" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;"><span style="color: rgb(69, 97, 119); font-family: Dubai-Regular, &quot;Segoe UI&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; letter-spacing: 0.14px;">loginPageUrl</span>}</span><span srcinfo="243:243" dstinfo="207:207" paragraphname="paragraph0" issource="false" id="ouHighlight__243_243TO207_207" style="color: rgb(85, 85, 85); font-family: &quot;Segoe UI&quot;, Tahoma, Helvetica, sans-serif; font-size: 13px; letter-spacing: normal;">}</span></p>',
          title: 'مرحبا بك في SuppliesOn.com'
        }
      },
      key: ['{{recipientName}}', '{{loginPageUrl}}']
    },
  ]
};