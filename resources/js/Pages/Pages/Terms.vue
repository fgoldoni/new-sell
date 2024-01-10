<template>
    <AppLayout>
        <div class="bg-slate-50 dark:bg-slate-800">
            <div aria-hidden="true" class="relative">
                <img
                    :src="$page.props.team.event.avatar"
                    :alt="$page.props.team.event.name"
                    class="h-[32rem] sm:h-[42rem] w-full object-cover object-center"
                />
                <div
                    class="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-800"
                />
            </div>

            <div
                class="mt-8 divide-y divide-gray-200 overflow-hidden rounded text-xl text-gray-500 text-justify"
            >
                <div class="px-4 py-5 sm:px-6">
                    <h2>Conditions générales d'utilisation</h2>
                </div>

                <div class="px-4 py-5 sm:p-6 whitespace-pre-line">
                    <h1 data-mce-fragment="1">Terms &amp; Conditions</h1>
                    <p data-mce-fragment="1">
                        Please read these Terms &amp; Conditions (or “Terms”)
                        carefully. By accessing or using Sell-Fisrt, you accept
                        to be bound by the Terms.
                    </p>
                    <br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">1. About These Terms</h2>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">1.1 Definitions</h5>
                    <ul data-mce-fragment="1">
                        <li data-mce-fragment="1">
                            “Services” refers to
                            <span data-mce-fragment="1">Sell-Fisrt</span>'s
                            services and features made available online (via
                            Sell-Fisrt websites), offline (e.g. support), and
                            through mobile applications.
                        </li>
                        <li data-mce-fragment="1">
                            “Content” refers to any material such as data, text,
                            design elements, sounds, video, etc. that is made
                            available by
                            <span data-mce-fragment="1">Sell-Fisrt</span>.
                        </li>
                        <li data-mce-fragment="1">
                            “User Content” refers to any material contributed or
                            posted by Users while using the Services.
                        </li>
                        <li data-mce-fragment="1">
                            "Organiser" refers to event organisers or promoters
                            using the Services to create and promote their
                            events.
                        </li>
                        <li data-mce-fragment="1">
                            “Consumer” refers to anyone using the Services to
                            consume information, purchase tickets, attend
                            Events, etc.
                        </li>
                        <li data-mce-fragment="1">
                            “Users” or “you” refers to Organisers, Consumers and
                            third parties using the Services.
                        </li>
                        <li data-mce-fragment="1">
                            "Sell-Fisrt," "we," "us," or "our," refers to
                            Sell-Fisrt website(s), apps, physical locations,
                            employees, other representatives, etc.
                        </li>
                        <li data-mce-fragment="1">
                            “Terms” means the terms and conditions of this
                            Agreement.
                        </li>
                    </ul>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">1.2 Sell-Fisrt Entity</h5>
                    <p data-mce-fragment="1">
                        If you access the Sell-Fisrt platform from the domains:
                        Sell-Fisrt.dk, Sell-Fisrt.eu, Sell-Fisrt.nl.
                        Sell-Fisrt.ie, sell-first.com,
                        <span data-mce-fragment="1">sell-first</span
                        ><span data-mce-fragment="1">.fr</span>,
                        <span data-mce-fragment="1">sell-service</span
                        ><span data-mce-fragment="1">.de&nbsp;</span>then you
                        are contracting with the following entity:
                    </p>
                    <br data-mce-fragment="1" />
                    <p data-mce-fragment="1">
                        <strong data-mce-fragment="1">Sell-Fisrt&nbsp;</strong>
                    </p>
                    <p data-mce-fragment="1">Niendorder Strasse 43<br /></p>
                    <p data-mce-fragment="1">22529 Hamburg<br /></p>
                    <p data-mce-fragment="1">Germany<br /></p>
                    <p data-mce-fragment="1">
                        <strong>USt-ID-Nr.: DE 332972034</strong>
                    </p>
                    <p data-mce-fragment="1">
                        All notices shall be sent to<span data-mce-fragment="1"
                            >&nbsp;contact@sell-first.com</span
                        >
                    </p>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">1.3 Other Applicable Terms</h5>
                    <p data-mce-fragment="1">
                        If an Organiser uses our Services for events with paid
                        tickets, Sell-Fisrt's<span data-mce-fragment="1"
                            >&nbsp;</span
                        ><a
                            href="https://billetto.co.uk/l/legal-documents#merchant"
                            data-mce-href="https://billetto.co.uk/l/legal-documents#merchant"
                            data-mce-fragment="1"
                            >Merchant Agreement</a
                        ><span data-mce-fragment="1">&nbsp;</span>and<span
                            data-mce-fragment="1"
                            >&nbsp;</span
                        ><a
                            href="https://billetto.co.uk/l/legal-documents#refund"
                            data-mce-href="https://billetto.co.uk/l/legal-documents#refund"
                            data-mce-fragment="1"
                            >Organiser Refund Policy Requirements</a
                        ><span data-mce-fragment="1">&nbsp;</span>also apply.
                    </p>
                    <p data-mce-fragment="1">
                        By agreeing to these Terms &amp; Conditions, you also
                        acknowledge that you have read the<span
                            data-mce-fragment="1"
                            >&nbsp;</span
                        ><a
                            href="https://billetto.co.uk/l/legal-documents#privacy"
                            data-mce-href="https://billetto.co.uk/l/legal-documents#privacy"
                            data-mce-fragment="1"
                            >Privacy Policy</a
                        ><span data-mce-fragment="1">&nbsp;</span>and<span
                            data-mce-fragment="1"
                            >&nbsp;</span
                        ><a
                            href="https://billetto.co.uk/l/legal-documents#cookie"
                            data-mce-href="https://billetto.co.uk/l/legal-documents#cookie"
                            data-mce-fragment="1"
                            >Cookie Statement</a
                        >. These documents apply to all Users.
                    </p>
                    <p data-mce-fragment="1">
                        Sell-Fisrt may sometimes provide Users with services not
                        described in these Terms &amp; Conditions. These Terms
                        still apply to such services, unless there’s a separate
                        and signed contract that explicitly states otherwise.
                    </p>
                    <p data-mce-fragment="1">
                        These Terms are a legally binding agreement between you
                        and Sell-Fisrt and outline your rights and
                        responsibilities while using our Services. If you are
                        using the Services on behalf of another person or
                        business, you agree that these Terms also apply to that
                        party.
                    </p>
                    <br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">2. Our Services</h2>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">2.1 Service Scope</h5>
                    <p data-mce-fragment="1">
                        Sell-Fisrt provides the following services:
                    </p>
                    <br data-mce-fragment="1" />
                    <ul data-mce-fragment="1">
                        <li data-mce-fragment="1">
                            Displaying and listing events as submitted by the
                            Organiser
                        </li>
                        <li data-mce-fragment="1">
                            Accepting and processing online orders for tickets
                            to the event
                        </li>
                        <li data-mce-fragment="1">
                            Providing Consumers with a confirmation number for
                            their transaction and their ticket
                        </li>
                        <li data-mce-fragment="1">
                            Assisting Organisers in marketing their events to
                            relevant Consumers
                        </li>
                        <li data-mce-fragment="1">
                            Assisting Consumers in discovering relevant events
                            to attend
                        </li>
                        <li data-mce-fragment="1">
                            Providing the tools and platform for Organisers to
                            create, manage, ticket, promote, and host their
                            events
                        </li>
                    </ul>
                    <br data-mce-fragment="1" />
                    <p data-mce-fragment="1">
                        Complete descriptions of specific services can be found
                        on the relevant Sell-Fisrt sites.
                    </p>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">2.2 Organiser Responsibility</h5>
                    <p data-mce-fragment="1">
                        Sell-Fisrt does not create, organise, or own the events
                        listed on the Services. The Organiser is solely
                        responsible for making sure that the event page and the
                        event itself comply with all applicable laws and that
                        any products and services offered on their event page
                        are delivered according to their description.
                    </p>
                    <p data-mce-fragment="1">
                        Sell-Fisrt collects payments made by Consumers via
                        third-party payment service providers and passes such
                        payments to the Organiser (as defined in the<span
                            data-mce-fragment="1"
                            >&nbsp;</span
                        ><a
                            href="https://billetto.co.uk/l/legal-documents#merchant"
                            data-mce-href="https://billetto.co.uk/l/legal-documents#merchant"
                            data-mce-fragment="1"
                            >Merchant Agreement</a
                        >).
                    </p>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">2.3 Order Processing</h5>
                    <p data-mce-fragment="1">
                        Orders will be processed after User’s billing
                        information has been verified. The User will receive an
                        email confirmation of a successfully processed order
                        shortly after the transaction is completed.
                    </p>
                    <br data-mce-fragment="1" />
                    <p data-mce-fragment="1">
                        If the User does not receive an email confirmation or
                        experiences an error message or service interruption
                        after submitting payment information, it is the User’s
                        responsibility to confirm with Sell-Fisrt whether or not
                        the order has been placed by contacting our customer
                        support at the address provided below or emailing us at
                        contact@sell-first.com
                    </p>
                    <p data-mce-fragment="1">
                        Some tickets may be offered to Consumers on a
                        subscription basis. All subscription tickets are
                        automatically renewed by the end of the relevant
                        subscription period unless otherwise stated.
                    </p>
                    <p data-mce-fragment="1">
                        By subscribing for subscription tickets Consumers adhere
                        to the relevant Organiser’s subscription terms.
                    </p>
                    <p data-mce-fragment="1">
                        All subscription tickets are pre-paid. Collection of the
                        subscription fee for the following subscription period
                        will take place before expiry of the current
                        subscription period. When ordering a monthly
                        subscription, the initial payment will be calculated
                        from the date of purchase until the last day of that
                        month. Afterwards, monthly subscription payments are
                        collected on the 1st of every month. In such cases where
                        the amount of the initial payment is less than 0.30 GBP
                        / 0.50 EUR / 3 SEK / 2.50 DKK / 3 NOK, the amount will
                        be rounded up to the aforementioned values. For example,
                        if a Consumer subscribes for a subscription ticket on
                        April 8th with a subscription term of one (1) month, the
                        initial fee will cover the period April 8th – April 30th
                        and afterwards the automatic collection of the
                        subscription fee covering the subscription period
                        beginning on May 1st will take place on May 1st and so
                        forth. Prior to an automatic collection of the agreed
                        subscription fee for the following subscription period
                        Sell-Fisrt will send an e-mail notification to the
                        Consumer.
                    </p>
                    <p data-mce-fragment="1">
                        Organisers may change the pricing of subscription
                        tickets at any time. In the event of a price change, the
                        Organiser will notify the Consumer in advance by sending
                        an email to the address registered by such Consumer when
                        purchasing the initial subscription ticket. If the
                        Consumer does not accept a price change, the Consumer
                        may cancel his/her subscription ticket as described in
                        Section 4.3. Consumers subscribing for subscription
                        tickets may cancel such purchase within 14 days after
                        the initial purchase.&nbsp;
                    </p>
                    <p data-mce-fragment="1">
                        Consumers hereby authorise Sell-Fisrt to charge or debit
                        their payment card or other account for the face value
                        of any tickets purchase as well as any fees or other
                        charges (such as taxes) that may be due in connection
                        with any transactions requested through Sell-Fisrt. If a
                        ticket is purchased on a subscription basis, Consumers
                        hereby authorise Sell-Fisrt to charge or debit their
                        payment card or other account for the subscription fee
                        and any subscription fees payable as a consequence of
                        the subscription being automatically renewed, as well as
                        any fees or other charges (such as taxes) that may be
                        due in connection with any transactions requested
                        through Sell-Fisrt.&nbsp;
                    </p>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">2.4 Ticket Delivery</h5>
                    <p data-mce-fragment="1">
                        Sell-Fisrt tickets can represent goods, tokens,
                        services, or traditional tickets. Tickets will always be
                        distributed in electronic format to the email a User
                        enters in connection with the purchase.
                    </p>
                    <p data-mce-fragment="1">
                        Sell-Fisrt will send a receipt to the User’s email
                        immediately after purchase. If a User has not received
                        the tickets one hour after purchase, the User can
                        contact Sell-Fisrt support.
                    </p>
                    <p data-mce-fragment="1">
                        Users must print their tickets and bring them to the
                        event, unless the organiser has stated otherwise. For
                        larger events, the organiser can choose to use
                        Sell-Fisrt’s scanners, which enable mobile tickets as
                        well.
                    </p>
                    <p data-mce-fragment="1">
                        If a User does not inform us of the non-receipt of
                        tickets within a reasonable time (and at least 72 hours
                        before the event), we will have no liability to the
                        User. Physical delivery of tickets, where available and
                        applicable, is subject to the delivery company terms.
                    </p>
                    <br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">3. Consumer Privacy</h2>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">3.1 Privacy Policy</h5>
                    <p data-mce-fragment="1">
                        Information provided to Sell-Fisrt by Users or collected
                        by Sell-Fisrt is governed by our<span
                            data-mce-fragment="1"
                            >&nbsp;</span
                        ><a
                            href="https://billetto.co.uk/l/legal-documents#privacy"
                            data-mce-href="https://billetto.co.uk/l/legal-documents#privacy"
                            data-mce-fragment="1"
                            >Privacy Policy</a
                        >.
                    </p>
                    <p data-mce-fragment="1">
                        No data transmissions over the Internet can be
                        guaranteed to be 100% secure. Consequently, Sell-Fisrt
                        cannot guarantee or warrant the security of any
                        information you transmit to Sell-Fisrt and you do so at
                        your own risk. Sell-Fisrt does not guarantee the
                        security of the portal or the services or the prevention
                        from loss of, alteration of, or improper access to, your
                        account information or data.&nbsp;
                    </p>
                    <br data-mce-fragment="1" /><br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">3.2 Organiser Responsibility</h5>
                    <p data-mce-fragment="1">
                        As an Organiser, you agree to comply with all applicable
                        laws regarding collection of consumer information, as
                        well as any related policies posted on the Services.
                    </p>
                    <br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">4. Termination of Agreement</h2>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">4.1 Terms Duration</h5>
                    <p data-mce-fragment="1">
                        These Terms remain in effect until they are terminated.
                        When this agreement is terminated by either party, these
                        Terms will generally no longer apply. However, certain
                        provisions will at all times remain applicable to both
                        Users and Sell-Fisrt. (See below)
                    </p>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">4.2 Termination by Sell-Fisrt</h5>
                    <p data-mce-fragment="1">
                        Sell-Fisrt may at any time terminate a User’s right to
                        use the Services if the User violates these Terms,
                        misuses or abuses the Services, or if permitting the use
                        of the Services would violate any applicable laws or
                        expose Sell-Fisrt to legal liability.
                    </p>
                    <p data-mce-fragment="1">
                        If Consumer opted to pay for tickets on a subscription
                        basis and fail to pay one or more instalments when due,
                        as a result of expiration of Consumers payment method,
                        insufficient funds, or otherwise, Consumer will remain
                        liable for any and all subscription fees due, as well as
                        any costs that Sell-Fisrt and/or Organiser incurs in
                        collecting any amounts Consumer failed to pay in
                        connection with the relevant subscription ticket,
                        including attorney and collections fees, and Sell-Fisrt
                        may suspend or terminate Consumers subscription.
                    </p>
                    <p data-mce-fragment="1">
                        Sell-Fisrt may at any time decide to stop offering the
                        Services, in full or in part. We will use reasonable
                        efforts to give Users notice of such termination. Users
                        agree that Sell-Fisrt is not liable to them or third
                        parties as a result of terminated access to the
                        Services.
                    </p>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">4.3 Termination by Users</h5>
                    <p data-mce-fragment="1">
                        Unless otherwise stated in a separate agreement a User
                        may terminate access to the Services and applicability
                        of these Terms by<span data-mce-fragment="1"
                            >&nbsp;</span
                        ><a
                            href="https://billetto.zendesk.com/hc/en-gb/articles/206769219-How-do-I-delete-my-Sell-Fisrt-account-?_ga=2.185766369.951995280.1605519245-559234873.1568970218"
                            data-mce-href="https://billetto.zendesk.com/hc/en-gb/articles/206769219-How-do-I-delete-my-Sell-Fisrt-account-?_ga=2.185766369.951995280.1605519245-559234873.1568970218"
                            data-mce-fragment="1"
                            >deleting his or her account</a
                        >.
                    </p>
                    <p data-mce-fragment="1">
                        Consumers without a registered account may at any point
                        terminate these Terms by stopping to use the Services.
                        As long as Consumers continue to access the Services,
                        these Terms remain in effect.
                    </p>
                    <p data-mce-fragment="1">
                        All subscription tickets are prepaid, and subscriptions
                        run until terminated. A Consumer may cancel a new
                        subscription after five (5) months with a notice period
                        of the current payment month plus one (1) month, unless
                        otherwise stated by the Organiser during the purchase
                        and/or in the confirmation email. Outside of the initial
                        binding period, a consumer can cancel their subscription
                        with a notice period of the current payment month plus
                        one (1) month. If, for example, the Consumer cancels the
                        subscription on 16th of May, then the Consumer’s
                        subscription will run until 30 June (current payment
                        month = 15 May - 31 May + one month =1 June - 30 June).
                        The Consumer will have continued access to all events
                        covered by the subscription ticket for the remainder of
                        Consumers paid subscription period, but Consumer will
                        not receive a refund of any subscription fees paid.
                        After termination of Consumers subscription, Consumer
                        will continue to owe any accrued amounts due under these
                        Terms and not yet paid. Consumer acknowledge and agree
                        that termination of Consumers subscription is Consumers
                        sole recourse if Consumer have any dissatisfaction,
                        issue or concern related to the events covered by the
                        subscription ticket, the Services or these Terms,
                        including subscription fees, applicable taxes, or
                        billing methods; or any changes thereto.
                    </p>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">4.4 Exceptions</h5>
                    <p data-mce-fragment="1">
                        Any provisions that by their nature should survive
                        termination of these Terms will do so.
                    </p>
                    <br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">5. Release and Indemnity</h2>
                    <p data-mce-fragment="1">
                        Users agree to cover Sell-Fisrt if their use of the
                        Services causes Sell-Fisrt to face legal or other claims
                        or expenses.
                    </p>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">5.1 Release</h5>
                    <p data-mce-fragment="1">
                        Users hereby agree to release Sell-Fisrt from any
                        damages and losses arising out of a dispute between
                        Users and a third party (including other Users) in
                        connection with events listed on the Services or the
                        Services themselves.
                    </p>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">5.2 Indemnity</h5>
                    <p data-mce-fragment="1">
                        Users agree to indemnify and hold Sell-Fisrt and its
                        representatives harmless from any and all damages or
                        losses that result from any claim, suit, or other
                        proceeding made by any third party relating to Users’
                        breach of these Terms, use of the Services in violation
                        of these Terms, or breach of applicable laws and
                        regulations.
                    </p>
                    <br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">
                        6. Disclaimer of Warranty &amp; User Risk
                    </h2>
                    <p data-mce-fragment="1">
                        Sell-Fisrt strives to provide the Services as expected
                        by the Users, but certain things cannot be guaranteed.
                    </p>
                    <p data-mce-fragment="1">
                        The Services are provided “as is.” Sell-Fisrt expressly
                        disclaims all warranties of any kind. Sell-Fisrt makes
                        no warranty that the Services will meet a User’s
                        requirements or be uninterrupted, secure, and
                        error-free.
                    </p>
                    <p data-mce-fragment="1">
                        Users agree that Sell-Fisrt has no control over and
                        cannot guarantee the quality, accuracy, safety, or
                        legality of any event or Content provided by Users.
                    </p>
                    <p data-mce-fragment="1">
                        Sell-Fisrt is not responsible for any liability arising
                        from acts or omissions by any third party that
                        Sell-Fisrt requires to provide the Services.
                    </p>
                    <p data-mce-fragment="1">
                        Consumers understand that certain events may carry
                        intrinsic risk, and that participation in those events
                        implies voluntary acceptance of those risks.
                    </p>
                    <p data-mce-fragment="1">
                        The foregoing disclaimers apply to the maximum extent
                        permitted by law.
                    </p>
                    <br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">7. Limitation of Liability</h2>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">7.1 Limitation of Liability</h5>
                    <p data-mce-fragment="1">
                        To the extent permitted by applicable laws, Sell-Fisrt
                        and entities associated with Sell-Fisrt’s provision of
                        Services will not be liable to Users or third parties
                        for any damages.
                    </p>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">7.2 Exceptions</h5>
                    <p data-mce-fragment="1">
                        Any warranty or right that by law cannot be excluded or
                        limited is not excluded or limited by these Terms. Only
                        those liability limitations which are lawful in your
                        jurisdiction will apply.
                    </p>
                    <br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">8. Services License</h2>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">8.1 License to Services</h5>
                    <p data-mce-fragment="1">
                        Sell-Fisrt grants Users a limited, non-exclusive,
                        non-transferable, revocable right to use our Services in
                        their capacity as either Consumer (to discover and
                        attend events) or Organiser (to create events and sell
                        tickets).
                    </p>
                    <p data-mce-fragment="1">
                        Organisers’ and Consumers’ use of the Services must
                        comply with these Terms and any applicable laws.
                    </p>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">8.2 Restrictions</h5>
                    <p data-mce-fragment="1">
                        Users agree that they will not copy or create
                        derivatives of the Services, reverse engineer any part
                        of the Services, use the Services for any commercial
                        purposes not explicitly specified, remove or alter any
                        proprietary notices on the Services, or in any way
                        interfere with or disrupt the Services.
                    </p>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">
                        8.3 Copyrights &amp; Intellectual Property
                    </h5>
                    <p data-mce-fragment="1">
                        Users agree that all Site Content may be protected by
                        copyrights, trademarks, or other intellectual property
                        laws. Sell-Fisrt may own the Site Content or portions of
                        the Site Content may be made available to Sell-Fisrt
                        through arrangements with third parties.
                    </p>
                    <p data-mce-fragment="1">
                        Site Content included in or made available through the
                        Services is the exclusive property of Sell-Fisrt and is
                        protected by copyright laws. Users agree to use the Site
                        Content only for purposes permitted by these Terms and
                        any applicable laws. Any rights not expressly granted
                        herein are reserved.
                    </p>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">8.4 Trademarks</h5>
                    <p data-mce-fragment="1">
                        The trademarks, service marks and logos of Sell-Fisrt
                        used in connection with the Services are registered and
                        unregistered trademarks or service marks of Sell-Fisrt.
                        Other company, product, and service names used in
                        connection with the Services may be trademarks or
                        service marks owned by third parties.
                    </p>
                    <p data-mce-fragment="1">
                        Users do not have license or right to use any displayed
                        Trademark without prior written consent of Sell-Fisrt.
                    </p>
                    <p data-mce-fragment="1">
                        The Trademarks may not be used to disparage Sell-Fisrt
                        or any third party or in a manner that may damage any
                        goodwill in the Trademarks.
                    </p>
                    <p data-mce-fragment="1">
                        Use of any Trademarks as part of a link to or from any
                        site is prohibited without Sell-Fisrt’s prior written
                        consent.
                    </p>
                    <p data-mce-fragment="1">
                        All goodwill generated from the use of any Sell-Fisrt
                        Trademark will inure to Sell-Fisrt's benefit. A number
                        of issued and pending patents apply to the Services.
                        Site Content may also be protected by copyrights owned
                        by Sell-Fisrt and/or third parties. Users that copy
                        portions of the Services are in violation of these
                        patent rights and copyrights.
                    </p>
                    <br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">
                        9. Organiser Obligations Regarding Permits &amp;
                        Licenses
                    </h2>
                    <p data-mce-fragment="1">
                        If you are an Organiser, you represent and warrant to us
                        that:
                    </p>
                    <br data-mce-fragment="1" />
                    <ul data-mce-fragment="1">
                        <li data-mce-fragment="1">
                            You and your affiliates will obtain, prior to the
                            start of ticket sales, all applicable licenses,
                            permits, and authorisations ("Licensure") with
                            respect to your events.
                        </li>
                        <li data-mce-fragment="1">
                            You and your affiliates will comply and ensure that
                            the venues for each of your events will comply with
                            all applicable laws.
                        </li>
                        <li data-mce-fragment="1">
                            You will only request that Sell-Fisrt offer tickets
                            to an event after you have obtained any specific
                            Licensures for such event.
                        </li>
                        <li data-mce-fragment="1">
                            You hereby agree to release Sell-Fisrt, its
                            representatives, and partner companies from all
                            damages arising out of or in any way connected with
                            your or your affiliates' Licensure or any failure to
                            obtain or maintain any Licensure.
                        </li>
                        <li data-mce-fragment="1">
                            Upon reasonable request of Sell-Fisrt, you agree to
                            provide evidence of relevant Licensure and related
                            information prior to offering tickets or
                            registrations for your event
                        </li>
                    </ul>
                    <br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">
                        10. Copyright Takedown Notices
                    </h2>
                    <p data-mce-fragment="1">
                        If you are a copyright owner or represent a copyright
                        owner and you believe that any content on the Sites
                        infringes your copyrights, you may submit a notice
                        to<span data-mce-fragment="1">&nbsp;</span
                        ><a
                            href="mailto:contact@sell-first.com"
                            data-mce-href="mailto:contact@sell-first.com"
                            data-mce-fragment="1"
                            >contact@sell-first.com</a
                        >
                    </p>
                    <br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">11. Ban on Commercial Use</h2>
                    <p data-mce-fragment="1">
                        The Site Content is not for commercial use by the Users.
                        Users have no right to and agree not to use any Site
                        Content for their own commercial purposes or to use any
                        means to extract data from the Site(s).
                    </p>
                    <br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">12. Fees &amp; Refunds</h2>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">12.1 Sell-Fisrt Fees</h5>
                    <p data-mce-fragment="1">
                        It is free for Users to create an account, list an
                        event, or access the Services. However, sale of paid
                        tickets, hereunder subscription tickets, and
                        registrations carries a fee. Fees may vary based on
                        individual agreements between Sell-Fisrt and certain
                        Organisers.
                    </p>
                    <p data-mce-fragment="1">
                        Organisers may choose to pass the fees along to
                        Consumers, in which case these will be shown as “Fees”
                        on the applicable event page. Organisers may also choose
                        to instead absorb the fees into the ticket or
                        registration price and pay these fees out of gross
                        ticket proceeds.
                    </p>
                    <p data-mce-fragment="1">
                        Consumers may be charged other fees including taxes,
                        ticket insurance, etc. Therefore, the total fee paid by
                        Consumers may be different from the fees charged by
                        Sell-Fisrt to the applicable Organiser or the standard
                        fees described on the Services to Organisers.
                    </p>
                    <p data-mce-fragment="1">
                        Sell-Fisrt does not control or have information about
                        fees charged by an individual User’s bank or credit card
                        company. Users must check with their bank or credit card
                        company in order to understand all applicable fees,
                        surcharges, and currency conversion rates prior to
                        transacting on Sell-Fisrt.
                    </p>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">12.2 Transfer of Tickets</h5>
                    <p data-mce-fragment="1">
                        If you wish to transfer tickets to an event you have
                        purchased on Sell-Fisrt, please follow the instructions
                        on the<span data-mce-fragment="1">&nbsp;</span
                        ><a
                            href="https://billetto.zendesk.com/hc/en-gb/articles/209486305-How-do-I-transfer-tickets-to-a-friend-?_ga=2.20814960.951995280.1605519245-559234873.1568970218"
                            data-mce-href="https://billetto.zendesk.com/hc/en-gb/articles/209486305-How-do-I-transfer-tickets-to-a-friend-?_ga=2.20814960.951995280.1605519245-559234873.1568970218"
                            data-mce-fragment="1"
                            >"How do I transfer tickets to a friend?"</a
                        ><span data-mce-fragment="1">&nbsp;</span>page.
                    </p>
                    <br data-mce-fragment="1" />
                    <h5 data-mce-fragment="1">12.3 Refunds</h5>
                    <p data-mce-fragment="1">
                        All ticket transactions are between an Organiser and
                        respective Consumers. Therefore, Consumers must contact
                        the applicable Organiser with any refund requests. You
                        can find help with getting a refund<span
                            data-mce-fragment="1"
                            >&nbsp;</span
                        ><a
                            href="https://billetto.zendesk.com/hc/en-gb/articles/206450259-I-wish-to-cancel-my-ticket-and-receive-a-refund-what-should-I-do-?_ga=2.20814960.951995280.1605519245-559234873.1568970218"
                            data-mce-href="https://billetto.zendesk.com/hc/en-gb/articles/206450259-I-wish-to-cancel-my-ticket-and-receive-a-refund-what-should-I-do-?_ga=2.20814960.951995280.1605519245-559234873.1568970218"
                            data-mce-fragment="1"
                            >here</a
                        >.
                    </p>
                    <p data-mce-fragment="1">
                        Consumers that receive a refund must discard any
                        previously delivered ticket(s) and not use it to attend
                        events for which the ticket is issued. Violating this
                        constitutes fraud. Organisers are expected to follow all
                        applicable procedures to verify the validity of tickets.
                        Sell-Fisrt will not be held liable for any costs arising
                        from a failure by Organisers to check validity of
                        tickets or for any costs and damages arising from fraud
                        or purchase of tickets via non-official means.
                    </p>
                    <p data-mce-fragment="1">
                        Before purchasing tickets, it is the Consumer’s
                        responsibility to carefully review all aspects of events
                        covered by such tickets, including event restriction,
                        dates, pricing, and charges. Sell-Fisrt will not issue
                        any refunds for any lost, stolen, destroyed, or damaged
                        tickets, or as under any other circumstances except in
                        the limited cases explicitly described in this
                        Agreement. If Sell-Fisrt terminates a subscription
                        ticket, the Consumer must immediately stop using such
                        ticket and/or attending events covered by such ticket.
                        However, if the Consumer has subscribed to and paid for
                        a subscription ticket, and Sell-Fisrt and/or Organiser
                        terminate or cancel such ticket before the end of a paid
                        subscription period, or Sell-Fisrt terminates Consumers
                        account before the end of a paid subscription period for
                        reasons other than Consumers breach of these Terms,
                        Sell-Fisrt will refund a prorated portion of the
                        applicable subscription fee corresponding to the portion
                        of the paid subscription period for which our action
                        caused Consumer not to have access to the events covered
                        by the subscription ticket. If Sell-Fisrt terminate or
                        cancel Consumers subscription ticket because Consumer
                        breached these Terms, Consumer will not be entitled to
                        any refund.
                    </p>
                    <p data-mce-fragment="1">
                        Even if a refund is issued by Organiser, Sell-Fisrt’s
                        Fees will be deducted from the refund amount, regardless
                        of whether the fee is included or excluded from the
                        ticket price. The Consumer may apply for a refund prior
                        to the event in question provided that tickets for the
                        event remain on sale. The Consumer may apply for a
                        refund of a subscription ticket prior to the beginning
                        of the subscription period provided that the
                        subscription tickets remain on sale. Acceptance of
                        refunds is determined by the Organisers refund policy
                        and it is the Consumers responsibility to check this
                        policy with the Organiser prior to purchasing any
                        ticket.&nbsp;
                    </p>
                    <br data-mce-fragment="1" />
                    <p data-mce-fragment="1">
                        Should an event be cancelled, the Organiser of the event
                        will inform the User prior to such cancellation and will
                        refund to the User the ticket price minus the Sell-Fisrt
                        Fee. However, for subscription tickets cancellation of
                        one or more events covered by such ticket will not
                        entitle the Consumer to a refund of the subscription fee
                        or any part thereof. The Organiser of an event covered
                        by a subscription ticket will inform the Consumer prior
                        to any cancellation or change of the events coved by
                        such ticket.&nbsp;
                    </p>
                    <p data-mce-fragment="1">
                        Notwithstanding anything to the contrary in these Terms
                        any and all claims for refunds become obsolete three (3)
                        years from the time where such claim arose.
                    </p>
                    <br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">13. Sell-Fisrt User Accounts</h2>
                    <p data-mce-fragment="1">
                        Sell-Fisrt requires Users to register for an account in
                        order to access certain features and functionality. If a
                        User has no account at the time of purchase, Sell-Fisrt
                        will create an account for the User. Users are aware and
                        accept that when a Sell-Fisrt account is created, a
                        public profile is also created. Users are aware and
                        accept that they can opt out of this by accessing
                        Account settings.
                    </p>
                    <p data-mce-fragment="1">
                        Users agree to follow certain rules when creating an
                        account, including the following:
                    </p>
                    <ul data-mce-fragment="1">
                        <li data-mce-fragment="1">
                            You agree to follow all applicable laws when
                            creating an account.
                        </li>
                        <li data-mce-fragment="1">
                            You agree to provide accurate information about
                            yourself or the entity you use the Services on
                            behalf of. You also agree to update this information
                            if it changes.
                        </li>
                        <li data-mce-fragment="1">
                            If there is a dispute about account ownership
                            between people or entities, Sell-Fisrt will be the
                            sole arbiter of such dispute. Sell-Fisrt's decision
                            will be final and binding on all parties and may
                            include suspension or termination of the account in
                            question.
                        </li>
                        <li data-mce-fragment="1">
                            If you are using the Services on behalf of a company
                            or other entity, we expect that you have the
                            authority to legally bind that entity and grant all
                            permissions and licenses provided in these Terms.
                        </li>
                        <li data-mce-fragment="1">
                            Sell-Fisrt allows Users to add “sub-users” to their
                            accounts and grant certain permissions to these
                            sub-users. Users are solely responsible for all
                            activity taking place under their account, including
                            that by sub-users. Users must keep all relevant
                            passwords and account details confidential. Rules
                            that apply to the User’s account will apply equally
                            to any third parties to whom the User grants account
                            access.
                        </li>
                        <li data-mce-fragment="1">
                            Users agree to promptly notify Sell-Fisrt in case of
                            any unauthorised use of their account or any other
                            breach of security. Users are responsible and will
                            be held accountable for any activity occurring under
                            their account.
                        </li>
                    </ul>
                    <p data-mce-fragment="1">
                        Sell-Fisrt uses third party retargeting which allows us
                        to advertise to Users who have visited our website or
                        company pages on third party platforms, personalise
                        every ad for every User automatically, and
                        use&nbsp;dynamic ads that automatically show Users items
                        they're most interested in. For information on third
                        parties Sell-Fisrt work with to provide specific
                        functionality please go to our list of<span
                            data-mce-fragment="1"
                            >&nbsp;</span
                        ><a
                            href="https://billetto.co.uk/l/legal-documents%23sub"
                            data-mce-href="https://billetto.co.uk/l/legal-documents%23sub"
                            data-mce-fragment="1"
                            >Sub-Processors</a
                        >.&nbsp;
                    </p>
                    <br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">14. User Content</h2>
                    <p data-mce-fragment="1">
                        All Content is the sole responsibility of the person
                        from whom such Content originated. Sell-Fisrt does not
                        control and is not responsible for user submitted
                        Content and that by using the Website, you may be
                        exposed to Content that is offensive, indecent,
                        inaccurate, misleading, or otherwise objectionable.
                        Furthermore, the Site may contain links to other
                        websites, which are completely independent of
                        Sell-Fisrt.
                    </p>
                    <br data-mce-fragment="1" /><br data-mce-fragment="1" />
                    <p data-mce-fragment="1">
                        We make no representation or warranty as to the
                        accuracy, completeness or authenticity of the
                        information contained in any linked Site. Likewise,
                        Sell-Fisrt makes no representation or warranty as to the
                        accuracy, completeness or authenticity of the
                        information contained in any such Content posted on,
                        transmitted through, and available through the Site.
                    </p>
                    <p data-mce-fragment="1">
                        Users of the Site bear all risks associated with the use
                        and/or reliance upon any Content, and/or the
                        representations made therein, and under no circumstances
                        will Sell-Fisrt be liable in any way for any Content or
                        for any loss or damage of any kind incurred as a result
                        of the use of any Content posted, emailed or otherwise
                        made available via the Site.
                    </p>
                    <p data-mce-fragment="1">
                        You acknowledge that Sell-Fisrt does not prescreen or
                        approve Content prior to posting. Sell-Fisrt makes no
                        representations and/or warranties to any of the claims
                        made in any posting on reviews and comments, personal
                        profile, listings, postings, descriptions, messages,
                        group discussions, guides, and message boards or
                        otherwise of any Content, by any user.
                    </p>
                    <p data-mce-fragment="1">
                        And further, as to Content: (i) You understand and agree
                        that Sell-Fisrt may review and delete any Content that
                        in the sole judgment of Sell-Fisrt violates this
                        Agreement or which might be offensive, illegal, or that
                        might violate the rights, harm, or threaten the safety
                        of others; (ii) You are solely responsible for the
                        Content that You publish or display; and (iii) by
                        posting Content to any public area of the Site, You
                        automatically grant, and You represent and warrant that
                        You have the right to grant, to Sell-Fisrt an
                        irrevocable, perpetual, non-exclusive, fully paid,
                        worldwide license to use, copy, perform, display, and
                        distribute such information and content and to prepare
                        derivative works of, or incorporate into other works,
                        such information and content, and to grant and authorise
                        sublicenses of the foregoing.
                    </p>
                    <p data-mce-fragment="1">
                        Sell-Fisrt reserves the right to investigate and take
                        appropriate legal action in its sole discretion against
                        anyone who violates this provision, including without
                        limitation, removing the offending communication from
                        the Site and terminating the membership of such
                        violators. The following is a partial list of the kind
                        of Content that is illegal or prohibited on the Site:
                    </p>
                    <p data-mce-fragment="1">
                        Content that (a) is patently offensive to the online
                        community, such as Content that promotes racism,
                        bigotry, hatred or physical harm of any kind against any
                        group or individual; (b) harasses or advocates
                        harassment of another person; (c) involves the
                        transmission of \"junk mail", "chain letters," or
                        unsolicited mass mailing or "spamming"; (d) promotes
                        information that You know is false, misleading or
                        promotes illegal activities or conduct that is abusive,
                        threatening, obscene, defamatory or libelous; (e)
                        promotes an illegal or unauthorised copy of another
                        person's copyrighted work, such as providing pirated
                        computer programs or links to them, providing
                        information to circumvent manufacturer-installed copy
                        protect devices, or providing pirated music or links to
                        pirated music files; (f) contains restricted or password
                        only access pages, or hidden pages or images (those not
                        linked to or from another accessible page); (g) displays
                        pornographic or sexually explicit material of any kind;
                        (h) provides material that exploits people under the age
                        of 18 in a sexual or violent manner, or solicits
                        personal information from anyone under 18; (i) provides
                        instructional information about illegal activities such
                        as making or buying illegal weapons, violating someone's
                        privacy, or providing or creating computer viruses; (j)
                        solicits passwords or personal identifying information
                        for commercial or unlawful purposes from other users;
                        (k) engages in commercial activities and/or sales
                        without our prior written consent such as contests,
                        sweepstakes, barter, advertising, and pyramid schemes;
                        or (l) post nonlocal or otherwise irrelevant Content,
                        repeatedly post the same or similar Content or otherwise
                        impose an unreasonable or disproportionately large load
                        on our infrastructure. Even though all of this is
                        strictly prohibited, there is a small chance that You
                        might become exposed to such items and You further waive
                        Your right to any damages (from any party) related to
                        such exposure.
                    </p>
                    <p data-mce-fragment="1">
                        Sell-Fisrt may use certain User content, included but
                        not limited to a User’s name, logo, event picture, to
                        identify them as a Sell-Fisrt customer both on the
                        Services and in promotional materials.
                    </p>
                    <p data-mce-fragment="1">
                        Sell-Fisrt may preserve User Content and account
                        information and disclose these if required to do so by
                        law, to comply with legal process, to respond to claims
                        that any User Content violates the rights of third
                        parties, to enforce these Terms, or to protect the
                        rights and safety of Sell-Fisrt, its users, and its
                        representatives.
                    </p>
                    <br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">15. Notices</h2>
                    <p data-mce-fragment="1">
                        Sell-Fisrt may send notices to Users via emails
                        registered in Sell-Fisrt’s records. Sell-Fisrt may also
                        provide notices of changes to these Terms or other
                        matters by displaying notices or links to notices on the
                        Services.
                    </p>
                    <p data-mce-fragment="1">
                        Notices to Sell-Fisrt can be sent to<span
                            data-mce-fragment="1"
                            >&nbsp;</span
                        ><a
                            href="mailto:contact@sell-first.com"
                            data-mce-href="mailto:contact@sell-first.com"
                            data-mce-fragment="1"
                            >contact@sell-first.com</a
                        >.
                    </p>
                    <br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">
                        16. Ongoing Changes to Terms &amp; Conditions
                    </h2>
                    <p data-mce-fragment="1">
                        Sell-Fisrt reserves the right to modify these Terms from
                        time to time. If these changes are considered material,
                        Sell-Fisrt will inform the Users by posting the changes
                        on the Services or sending emails or messages to the
                        Users.
                    </p>
                    <p data-mce-fragment="1">
                        Users are responsible for staying up to date with the
                        posted changes. Continued use of the Services following
                        any changes constitutes acceptance of those changes and
                        the updated Terms.
                    </p>
                    <p data-mce-fragment="1">
                        Sell-Fisrt cannot guarantee availability of certain
                        product features or functionality. Sell-Fisrt reserves
                        the right to modify or discontinue any part of the
                        Services or the entire Service.
                    </p>
                    <br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">17. Assignment</h2>
                    <p data-mce-fragment="1">
                        Sell-Fisrt may freely assign these Terms and
                        Sell-Fisrt’s rights and obligations under these Terms to
                        an affiliate or another entity without consent or
                        approval by the Users.
                    </p>
                    <br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">18. Scope of Agreement</h2>
                    <p data-mce-fragment="1">
                        These Terms govern the use of Sell-Fisrt Services and
                        constitute the entire agreement between Users and
                        Sell-Fisrt.&nbsp;
                    </p>
                    <p data-mce-fragment="1">
                        In the event of a conflict or inconsistency between the
                        Sell-Fisrt Terms and conditions and the terms of other
                        parties, included but not limited to payment processing
                        partners and any other services providers, the
                        Sell-Fisrt Terms and conditions shall prevail.
                    </p>
                    <p data-mce-fragment="1">
                        These Terms supersede any prior agreements or
                        communications other than a written agreement for
                        Services between a User and Sell-Fisrt relating to a
                        specified event(s).
                    </p>
                    <br data-mce-fragment="1" /><br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">
                        19. Applicable Law and Jurisdiction
                    </h2>
                    <p data-mce-fragment="1">
                        This Agreement shall be governed and construed in
                        accordance with the applicable law of the country where
                        the Sell-Fisrt entity is registered, as stated in
                        article 1.2 of this document, and parties hereby submit
                        themselves to the exclusive jurisdiction of the Courts
                        in the countries stated above in respect to&nbsp; any
                        claim (including non-contractual disputes or claims).
                    </p>
                    <br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">
                        20. Linked Accounts &amp; Third-Party Sites
                    </h2>
                    <p data-mce-fragment="1">
                        Users acknowledge and agree that Sell-Fisrt does not
                        control and is not responsible for the availability of
                        any external websites or resources that may be linked to
                        by Sell-Fisrt or other Users.
                    </p>
                    <p data-mce-fragment="1">
                        Sell-Fisrt is not responsible or liable for any Content
                        or other materials on such websites / resources or any
                        damages or losses related to them, even where such
                        websites / resources are connected with Sell-Fisrt
                        partners or third-party service providers.
                    </p>
                    <br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">21. Force Majeure</h2>
                    <p data-mce-fragment="1">
                        Sell-Fisrt shall not be responsible for any delay in, or
                        failure of, the Service or the internet due to any
                        occurrence commonly known as “force majeure,” including
                        war, riots, embargoes, terrorism, strikes, or other
                        concerted acts of workmen (whether of Sell-Fisrt or
                        others) casualties or accidents, or any other causes,
                        circumstances, or contingencies beyond Sell-Fisrt’s,
                        which prevent or hinder the performance of Sell-Fisrt of
                        any of its obligations hereunder.
                    </p>
                    <br data-mce-fragment="1" />
                    <h2 data-mce-fragment="1">22. Other Provisions</h2>
                    <p data-mce-fragment="1">
                        Failure by Sell-Fisrt to enforce any part of these Terms
                        does not constitute a waiver of Sell-Fisrt’s right to
                        enforce the Terms at a later point.
                    </p>
                    <p data-mce-fragment="1">
                        Any provision of these Terms that is found to be
                        unenforceable will be limited to the minimum extent
                        necessary. Other provisions of these Terms will remain
                        in full force and effect.
                    </p>
                    <p data-mce-fragment="1">
                        Section titles and numbering in these Terms has no legal
                        effect. Sell-Fisrt may freely assign any of its right
                        and obligations under these Terms. The Terms may be
                        translated into other languages. If there is a conflict
                        between the English version and a translated version,
                        the English version will have precedence.
                    </p>
                </div>
            </div>

            <FooterComponent></FooterComponent>
        </div>
    </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from "@/Layouts/AppLayout.vue";
import FooterComponent from "@/Components/FooterComponent.vue";
import { useFaqsStore } from "@/stores/useFaqsStore";
import { storeToRefs } from "pinia";

const faqsStore = useFaqsStore();
const { faqs } = storeToRefs(faqsStore);
</script>
