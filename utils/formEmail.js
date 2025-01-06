const { convertToDateFormat } = require("./helpers");

exports.formEmailTemplate = async (
  driver,
  personalDetails,
  employmentHistory,
  emergencyContact,
  questions
) => {

    console.log('driver====>>>', questions)
  let date = convertToDateFormat(driver?.createdAt);
  let name = personalDetails?.name;

  return ` <div style="width: 80%; margin: auto">
    <!-- Personal Information -->
    <section>
      <h2 style="text-align: center; background: #ff0; color: #f00">
        Driver Details
      </h2>
      <table style="text-align: left">
        <tr>
          <th>01. Application Details</th>
          <td>- ${date}</td>
        </tr>
        <tr>
          <th>02. Driver's Name</th>
          <td>- ${name}</td>
        </tr>
        <tr>
          <th>03. Driver's License Number</th>
          <td>- ${personalDetails?.license_number}</td>
        </tr>
        <tr>
          <th>04. Driver's License Expiry</th>
          <td>- ${convertToDateFormat(personalDetails?.license_expiry)}</td>
        </tr>
        <tr>
          <th>05. Driver's License Class</th>
          <td>- ${personalDetails?.license_class}</td>
        </tr>
        <tr>
          <th>06. Driver's License Prov.</th>
          <td>- ${personalDetails?.license_province}</td>
        </tr>
        <tr>
          <th>07. Driver's Address</th>
          <td></td>
        </tr>
        <tr>
          <th style="padding-left: 30px">a. Street</th>
          <td>-${personalDetails?.street_address}</td>
        </tr>
        <tr>
          <th style="padding-left: 30px">b. City</th>
          <td>-${personalDetails?.city}</td>
        </tr>
        <tr>
          <th style="padding-left: 30px">c. Zip/Postal Code</th>
          <td>- ${personalDetails?.zipcode}</td>
        </tr>
        <tr>
          <th style="padding-left: 30px">d. Province</th>
          <td>- ${personalDetails?.province}</td>
        </tr>
        <tr>
          <th style="padding-left: 30px">e. Country</th>
          <td>- ${personalDetails?.country}</td>
        </tr>
        <tr>
          <th>08. Driver's Phone Number</th>
          <td>- ${personalDetails?.phone_number}</td>
        </tr>
        <tr>
          <th>09. Driver's Email</th>
          <td>- ${driver?.email}</td>
        </tr>
        <tr>
          <th>10. Driver's DOB</th>
          <td>- ${convertToDateFormat(personalDetails?.dob)}</td>
        </tr>
        <tr>
          <th>11. SIN#</th>
          <td>- ${personalDetails?.sin}</td>
        </tr>
        <tr>
          <th>12. Medical Expiry Date</th>
          <td>- ${convertToDateFormat(personalDetails?.medical_expiry)}</td>
        </tr>
        <tr>
          <th>13. Your addresses of residency for the past 3 years:</th>
        </tr>
        <tr style="padding-left: 40px">
          <table
            style="
              width: 80%;
              margin-left: 30px;
              text-align: left;
              border-collapse: collapse;
            "
            border="1"
          >
            <tr>
              <th style="width: 60%; padding: 5px">Address</th>
              <th style="padding: 5px">How Long</th>
            </tr>
            <tr>
              <td style="padding: 5px">asasas</td>
              <td style="padding: 5px">asas</td>
            </tr>
          </table>
        </tr>
      </table>
      <hr />
    </section>

    <!-- Interview question -->
    <section>
      <h2 style="text-align: center; background: #ff0; color: #f00">
        Driver Interview Questions
      </h2>
      <div>
      ${
        questions?.questions?.map((item,index)=> '<div><p style="font-weight: 700">'+
           (index+1)+'. '+ item?.question+
        '</p><p><b>Ans. -</b>'+item?.answer+'</p></div')
      }
        
        <p style="font-weight: 700">
          Have you ever been placed OUT OF SERVCE, if so, why?
        </p>
        <p><b>Ans. -</b> Yes/No</p>
      </div>
    </section>

    <!-- Self declaration -->
    <section>
      <h2 style="text-align: center; background: #ff0; color: #f00">
        To Be Read Carefully and Agree By Applicant
      </h2>
      <p>
        This certifies that this application was completed by me, and that all
        entries on it and information in it are true and complete to the best
        of my knowledge.
      </p>
      <p>
        I authorize to make such investigations and inquiries of my personal,
        employment, financial or medical history and other related matters as
        may be necessary in arriving at an employment decision. I hereby
        release employers, schools or persons from all liability in responding
        to inquiries in connection with my application,
      </p>
      <p>
        In the event of my employment, I understand that false or misleading
        information given in my application or interview(s) may result in
        discharge. I understand, also, that I am required to abide by all
        rules and regulations of, as permitted by Law.
      </p>
      <p>
        I understand that information I provide regarding current and previous
        employers may be used and those employers will be contacted, for the
        purpose of investigating my safety performance history as required by
        FMCSA 391.23 and I understand that I have the right to:
      </p>
      <p>
        <i>Review information provided by previous employers:</i>
      </p>
      <p>
        <i>
          Have Errors in the information corrected by previous employers and
          for those previous employers to resend the corrected information.
        </i>
      </p>
      <p>
        <i>
          Have a rebuttal statement attached to the alleged erroneous
          information, if the previous employer and I can't agree on the
          accuracy of the statement.
        </i>
      </p>
      <div style="margin-top: 50px">
        <div style="display: flex; justify-content: space-between">
          <span>${date}</span><span>${name}</span>
        </div>
        <div style="display: flex; justify-content: space-between">
          <b>Date</b><b>Applicant's Name</b>
        </div>
      </div>
    </section>

    <!-- Emergency Contact -->
    <section>
      <h2 style="text-align: center; background: #ff0; color: #f00">
        Emergency Contact Information
      </h2>
      <p>
        Please list the names, addresses, phone numbers and relationship of
        people you would like us to contact in case of emergency (only people
        you have known for at least a year). Include at least one relative.
        Any information Shah Transport gathers from these references will be
        held as confidential and not released to you, the applicant. This
        certifies that this application was completed by me, and that all
        entries on it and information in it are true and complete to the best
        of my knowledge.
      </p>
      <p style="font-weight: 700">Employee Informatio</p>
      <table
        style="
          width: 80%;
          margin-left: 30px;
          text-align: left;
          border-collapse: collapse;
        "
        border="1"
      >
        <tr>
          <td style="width: 60%; padding: 5px">
            <b>Employee Name -</b><span></span>
          </td>
          <td style="padding: 5px"><b>Date - </b><span></span></td>
        </tr>
        <tr>
          <td style="padding: 5px"><b>Address - </b><span></span></td>
          <td style="padding: 5px"><b>Contact No. -</b><span></span></td>
        </tr>
      </table>
      <p style="font-weight: 700">Please complete the following questions.</p>
      <table style="width: 80%">
        <tr>
          <td style="width: 60%; padding: 5px">
            <b>Date of Birth -</b><span></span>
          </td>
          <td style="padding: 5px"><b>Sex - </b><span></span></td>
        </tr>
        <tr>
          <td style="padding: 5px"><b>Marital Status - </b><span></span></td>
          <td style="padding: 5px">
            <b>No. of Dependents -</b><span></span>
          </td>
        </tr>
      </table>
      <br />
      <div style="width: 70%; border: 5px double black; padding: 30px">
        <h2 style="text-align: center">
          Person to be notified in the event of an Emergency
        </h2>
        <h4>First Person to Contact</h4>
        <p><b>Name -</b><span></span></p>
        <p><b>Address -</b><span></span></p>
        <p style="display: flex">
          <span style="display: inline-block; width: 50%"
            ><b>Contact No. -</b><span></span
          ></span>
          <span><b>Relationship -</b><span></span></span>
        </p>
        <hr />
        <h4>Second Person to Contact</h4>
        <p><b>Name -</b><span></span></p>
        <p><b>Address -</b><span></span></p>
        <p style="display: flex">
          <span style="display: inline-block; width: 50%"
            ><b>Contact No. -</b><span></span
          ></span>
          <span><b>Relationship -</b><span></span></span>
        </p>
      </div>
    </section>

    <!-- Medical Declaration -->
    <section>
      <h2 style="text-align: center; background: #ff0; color: #f00">
        Medical Declaration
      </h2>
      <p>
        On March 30, 1999, Transport Canada and the U.S. Federal Highway
        Administration (FHWA) entered into a reciprocal agreement regarding
        the physical requirements for a Canadian driver of a commercial
        vehicle in the U.S., as currently contained in the Federal Motor
        Carrier Safety Regulations, Part 391.41 et seq., and vice versa. The
        reciprocal agreement removes the requirement for a Canadian driver to
        carry a copy of a medical examiner's certificate indicating that the
        driver is physically qualified. (In effect, the existence of a valid
        driver's license issued by the Province of Ontario is deemed to be
        proof that a driver is physically qualified to drive in the U.S.).
        However, the FHWA will not recognize an Ontario driver's license if
        the driver has certain medical conditions, and those conditions would
        prohibit him from driving in the United States.
      </p>
      <p>
        I ${name},, certify that I am qualified to operate
        a commercial motor vehicle in the United States. I further certify
        that:
      </p>
      <ul>
        <li>
          I have no clinical diagnosis of diabetes currently requiring insulin
          for control.
        </li>
        <li>
          I have no established medical history or clinical diagnosis of
          epilepsy.
        </li>

        <li>
          I do not have impaired hearing. (A driver must be able to perceive a
          forced whispered voice in the better ear at not less than 5 feet
          with or without the use of a hearing aid, or does not have an
          average hearing loss in the better ear greater than 40 decibels at
          500Hz, 1000Hz, or 2000Hz with or without a hearing aid when tested
          by an audiometric device calibrated to American National Standard
          Z24.5 - 1951).
        </li>

        <li>
          I have not been issued a waiver by the Province of Ontario allowing
          me to operate a commercial motor vehicle pursuant to Section 20 or
          21 of Ontario Regulation 340/94.
        </li>
      </ul>
      <p>
        I further agree to inform should my medical status change, or if I can
        no longer certify conditions as described above.
      </p>
      <div style="margin-top: 50px">
        <div style="display: flex; justify-content: space-between">
          <span>${date}</span><span>${name}</span>
        </div>
        <div style="display: flex; justify-content: space-between">
          <b>Date</b><b>Applicant's Name</b>
        </div>
      </div>
    </section>

    <!-- Driver record Search -->
    <section>
      <h2 style="text-align: center; background: #ff0; color: #f00">
        Authorization For Driver Record Search
      </h2>
      <p>
        The Federal Motor Carrier Safety Regulations, Section 391.21, which
        covers Drivers Qualification and application for employment, requires
        the motor carrier to obtain a list of all motor vehicle violations for
        the last three (3) years.
      </p>
      <p>
        In Ontario, this is known as a Commercial Vehicle Operator Record
        Driver Abstract. It is company policy to obtain a list of both
        commercial and personal motor vehicle violations for each driver
        operating under its authorities, on a periodic basis.
      </p>
      <p>
        As a condition of my employment/contract, I hereby provide written
        authorization for to obtain such information.
      </p>
      <p>I have read and understand the above conditions.</p>
      <div style="margin-top: 50px">
        <div style="display: flex; justify-content: space-between">
          <span>${date}</span><span>${name}</span>
        </div>
        <div style="display: flex; justify-content: space-between">
          <b>Date</b><b>Applicant's Name</b>
        </div>
      </div>
    </section>

    <!-- Driver License Requirements -->
    <section>
      <h2 style="text-align: center; background: #ff0; color: #f00">
        Certification of Compliance - Driver License Requirements
      </h2>
      <p>
        <b>Motor Carrier Instructions:</b> The requirements in Part 383 apply
        to every driver who operates in Intrastate, Interstate, or foreign
        commerce and operates a vehicle weighing 26,001 pounds or more, can
        transport more than 15 people, or transports hazardous materials that
        require placarding.
      </p>
      <p>
        Motor Carrier Instructions: The requirements in Part 383 apply to
        every driver who operates in Intrastate, Interstate, or foreign
        commerce and operates a vehicle weighing 26,001 pounds or more, can
        transport more than 15 people, or transports hazardous materials that
        require placarding.
      </p>
      <p>
        <b>DRIVER REQUIREMENTS:</b> Parts 383 and 391 of The Federal Motor
        Carrier Safety Regulations contain some requirements that you as a
        driver must comply with. These requirements are in effect as of July
        1,1987. They are as follows:
      </p>
      <ol>
        <li>
          You, as a commercial vehicle driver, may not possess more than one
          license. If you currently have more than one license, you should
          keep the license from your state of residence and return the
          additional licenses to the states that issued them. Destroying a
          license does not close the record in the state that issued it; you
          must notify the state. If a multiple license has been lost, stolen,
          or destroyed, you should close your record by notifying the state of
          issuance that you no longer want to be licensed by that state.
        </li>
        <li>
          Part 392.42 and Part 383.33 of the Federal Motor Carrier Safety
          Regulations require that you notify your employer the next business
          day of any revocation or suspension of your driver's license. In
          addition, Part 383.31 requires that any time you violate a state or
          local traffic law (other than parking), you must report it to your
          employer motor carrier and the state that issued your license within
          30 days.
        </li>
      </ol>
      <p>
        <b>DRIVER CERTIFICATION:</b> I certify that I have read and understand
        the above requirements: The following license is the only one that I
        possess:
      </p>
      <div style="margin-top: 50px">
        <div style="display: flex; justify-content: space-between">
          <span><b>Driver License -</b> <span></span></span>
          <span><b>License Expiry-</b> <span></span></span>
        </div>
        <div style="display: flex; justify-content: space-between">
          <span><b>Province -</b> <span></span></span>
          <span><b>Driver Name-</b> <span></span></span>
        </div>
      </div>
    </section>

    <!-- Safety Policy -->
    <section>
      <h2 style="text-align: center; background: #ff0; color: #f00">
        Safety Policy
      </h2>
      <div style="display: Flex; justify-content: space-between">
        <p><b>POLICY NUMBER:</b> 03012017</p>
        <p><b>Effective Date:</b> Feb 01, 2021</p>
      </div>
      <h3>01. POLICY STATEMENT:</h3>
      <p>
        In keeping with our organization's commitment to constant pursuit of
        customer satisfaction & continual improvement of service one of which
        objective is fostering employee involvement and empowerment, Shah
        Transport has introduced the Speeding Policy. The success of this
        Policy is directly related to our positive involvement.
      </p>
      <h3>02. PURPOSE:</h3>
      <p>
        This Policy will help prevent collision and injuries to drivers and
        the public that Shah Transport serves. It is intended to reduce risky
        driving and use it to identity Shah Transport best drivers.
      </p>
      <h3>03. PROCEDURE:</h3>
      <p>
        We will monitor speeding reports and Driver Scorecard on weekly basis
        and identify target drivers. Drivers have to come in office and go
        through all speeding report and understand the importance for drive
        safe and speed limit. Speeding, sharp turns or other unsafe actions
        that could lead too collision.
      </p>
      <h3>04. RESPONSIBILITY:</h3>
      <p>
        It is the responsibility of all Drivers to adhere to safety rules and
        follow correct behaviour while driving. Failure to do so may result in
        disciplinary action which If deemed appropriate by the Owners' may
        include further action up to end including termination.
      </p>
      <p><b>4.1</b> 1st Violation written letter.</p>

      <p><b>4.2</b> 2nd Violation within 4 weeks — 1 week suspension</p>

      <p><b>4.3</b> 3rd Violation in 6 months — 1 week suspension</p>

      <p><b>4.4</b> 4th Violation within 5 months — Meeting with owners.</p>
      <p>
        I {name? <b>{name}</b> :""} understand this speeding passenger policy
        and will abide with this policy at all Times, I also understand that
        failure to abide by the speeding policy is grounds for disciplinary
        action.
      </p>
      <div style="margin-top: 50px">
        <div style="display: flex; justify-content: space-between">
          <span>${date}</span><span>${name}</span>
        </div>
        <div style="display: flex; justify-content: space-between">
          <b>Date</b><b>Applicant's Name</b>
        </div>
      </div>
    </section>

    <!-- Inspection Policy -->
    <section>
      <h2 style="text-align: center; background: #ff0; color: #f00">
        CMV Inspection Policy Acknowledgement
      </h2>
      <p>
        I ${name}, acknowledge that I have been trained on
        the proper procedures to conduct a Pre-Trip Inspection, Post-Trip
        Inspection, Couple, Uncouple and 5th wheel tug test of a Commercial
        Motor Vehicle.
      </p>
      <p>
        I further agree that I shall each day conduct a full Pre-Trip and
        Post-Trip Inspection of every Commercial Motor Vehicle which I drive
        in accordance with Regulation199/07 of the Highway Traffic Act and
        FMCSA reg.392.7. And that I will record the inspections correctly in a
        vehicle inspection booklet. As well that each time, I couple to a
        trailer I will ensure the 5th wheel is properly connected by
        performing a visual and tug test inspection.
      </p>
      <p>
        I will report to dispatch any and all defects which I discover during
        any vehicle inspection immediately.
      </p>
      <p>
        I understand that failure to follow this policy or regulations will
        result in disciplinary action which may include termination.
      </p>
      <div style="margin-top: 50px">
        <div style="display: flex; justify-content: space-between">
          <span>${date}</span><span>${name}</span>
        </div>
        <div style="display: flex; justify-content: space-between">
          <b>Date</b><b>Applicant's Name</b>
        </div>
      </div>
    </section>

    <!-- Hours of service Policy -->
    <section>
      <h2 style="text-align: center; background: #ff0; color: #f00">
        Hours of Service Policy Acknowledgement
      </h2>
      <p>
        I ${name},acknowledge that I have been trained in
        the Hours-of-Service Regulations as they pertain to a Commercial Motor
        Vehicle driver in Canada and the United States (Regulations 555/06 of
        the Highway Traffic Act and Regulation 395 of FMCSR.)
      </p>
      <p>
        I further acknowledge that I will adhere to these regulations and
        follow them to the letter as per the jurisdiction that I am operating
        in.
      </p>
      <p>
        It is understood that the company will, at all times, monitor my
        compliance with Hours-of-Service regulations and in the event of
        non-compliance I will face disciplinary action and remedial training
        and upon discovery of repeated violations I may be subject to
        dismissal.
      </p>
      <div style="margin-top: 50px">
        <div style="display: flex; justify-content: space-between">
          <span>${date}</span><span>${name}</span>
        </div>
        <div style="display: flex; justify-content: space-between">
          <b>Date</b><b>Applicant's Name</b>
        </div>
      </div>
    </section>

    <!-- Driver Disciplinary Policy -->
    <section>
      <h2 style="text-align: center; background: #ff0; color: #f00">
        Driver Disciplinary Policy
      </h2>
      <h3>Purpose:</h3>
      <p>
        The philosophy of Shah Transport is to treat all drivers and
        Contractors in a friendly, firm and fair manner. It is further the
        policy of Shah Transport that whenever appropriate the guidelines of
        Progressive Disciplinary Action be exercised.
      </p>
      <h3>Scope:</h3>
      <p>
        Any driver or Owner Operator who has committed an infraction will be
        subject to the following:
      </p>
      <h3>First offense: Verbal Warning</h3>
      <p>
        This will be documented as a verbal warning and become a part of the
        Driver's / Owner Operators violation file.
      </p>
      <h3>Second Offense: Written Warning</h3>
      <p>As above documented and placed in violation file.</p>
      <h3>Third Offense: Suspension and or Final Written Warning</h3>
      <p>
        At the company's discretion this is a last chance before termination
        of contract or driver removed from contract.
      </p>
      <h3>Fourth Offense: Termination of employee.</h3>
      <h3>Other:</h3>
      <p>
        Shah Transport, may, at their discretion, determine an incident or
        situation is severe enough to warrant suspension or termination, and
        will exercise that option when necessary.
      </p>
      <p>
        Progressive Disciplinary Action will be executed for breach of company
        policies, procedures, and regulatory violations, out of service
        inspections, collisions, incidents or any other behavior which Shah
        Transport deems unacceptable. I acknowledge that I have read and
        understand the Discipline Policy of Shah Transport
      </p>
      <div style="margin-top: 50px">
        <div style="display: flex; justify-content: space-between">
          <span>${date}</span><span>${name}</span>
        </div>
        <div style="display: flex; justify-content: space-between">
          <b>Date</b><b>Applicant's Name</b>
        </div>
      </div>
    </section>

    <!-- Owner Operator Maintenance Policy Agreement -->
    <section>
      <h2 style="text-align: center; background: #ff0; color: #f00">
        Owner Operator Maintenance Policy Agreement
      </h2>
      <p>
        I ${name}, being an Owner Operator for Shah
        Transport Freight Lines agree that I will adhere to the Maintenance
        Policy of Shah Transport Freight Lines. I will as well turn into Shah
        Transport Freight Lines all maintenance reports and receipts
        associated with my truck and preventative maintenance performed and
        repairs completed.
      </p>
      <p>Failure to turn in reports will result in discipline.</p>
      <p>
        All Maintenance reports and receipts must be turned in to the Safety
        Department no later than the 15th of each month for the previous
        month. E.g. January reports must be turned in by February 15th.
      </p>
      <div style="margin-top: 50px">
        <div style="display: flex; justify-content: space-between">
          <span>${date}</span><span>${name}</span>
        </div>
        <div style="display: flex; justify-content: space-between">
          <b>Date</b><b>Applicant's Name</b>
        </div>
      </div>
    </section>

    <!-- No Passenger Policy -->
    <section>
      <h2 style="text-align: center; background: #ff0; color: #f00">
        No Passenger Policy
      </h2>
      <p>
        Due to insurance demands and the high liability risk to passengers
        traveling within transport trucks, Shah Transport Freight Lines has
        implemented and NO Passenger Policy. This policy is designed to
        eliminate the risk of distracted driving by having another person in
        the vehicle. Every tractor accident involving an injured guest
        passenger is a potential liability claim. The claim may be against the
        motor carrier and/or the driver whose negligence may have caused the
        accident.
      </p>
      <p>
        To protect the company as well as the driver operating the vehicle
        Shah Transport must insist that, persons other than company employees,
        or if the vehicle is operating in a team system, passengers are not
        allowed in our in our plated equipment. This policy also pertains to
        Owner Operator vehicles. No exceptions.
      </p>
      <p>
        To protect the company as well as the driver operating the vehicle
        Shah Transport must insist that, persons other than company employees,
        or if the vehicle is operating in a team system, passengers are not
        allowed in our in our plated equipment. This policy also pertains to
        Owner Operator vehicles. No exceptions.
      </p>
      <p>
        Management hopes that you understand this policy and must insist that
        you comply with this policy at all times. Failure to abide by this
        policy is subject to termination of employment or Owner Operator
        Contract.
      </p>
      <p>
        I ${name} understand this no passenger policy and will abide with this
        policy at all times, I also understand that failure to abide by the no
        passenger policy is grounds for immediate dismissal or termination of
        my owner operator contract.
      </p>
      <div style="margin-top: 50px">
        <div style="display: flex; justify-content: space-between">
          <span>${date}</span><span>${name}</span>
        </div>
        <div style="display: flex; justify-content: space-between">
          <b>Date</b><b>Applicant's Name</b>
        </div>
      </div>
    </section>

    <!-- Company Policy -->
    <section>
      <h2 style="text-align: center; background: #ff0; color: #f00">
        Company Policy
      </h2>
      <ul>
        <li>
          This job is available only if the individual sub-contractor agrees
          with these policies.
        </li>
        <li>
          Company pays to driver for professional services. If driver does not
          follow company rules and does any violations, then driver will be
          responsible for that.
        </li>
        <li>
          Complete circle check must be done before the vehicle's first trip
          of the day and for every trailer picked up during the day. Service
          call regarding pre-trip: tires, air leak will not be covered. Check
          properly before leaving.
        </li>
        <li>Engine oil and coolant must be checked before leaving.</li>
        <li>Driver must clean the truck on the weekend before leaving.</li>
        <li>
          Driver must check the oil sticker. Service must be done between
          20,000 to 23,000 kilometers.
        </li>
        <li>
          Driver must check all damages carefully and if any, then call
          dispatch or safety manager. If he does not check and call after
          picking up, then he will be responsible for damages.
        </li>
        <li>
          Any other claim or fine due to driver neglect is the responsibility
          of the driver. For example:
          <ul>
            <li>No truck route</li>
            <li>Low bridge</li>
            <li>Low wires</li>
            <li>Poles</li>
            <li>Lawn damage on private property</li>
            <li>Toll route ticket</li>
            <li>Any towing due to driver error</li>
          </ul>
        </li>
        <li>
          Driver has to pay for damages such as:
          <ul>
            <li>Truck's bumper</li>
            <li>Fender</li>
            <li>Mirrors</li>
            <li>Trailer door damage</li>
            <li>Accident on private property like parking lot accident</li>
          </ul>
          <p>
            Park slowly in the yard or park in a safe place at a truck stop.
            NO EXCUSE WILL BE ACCEPTED.
          </p>
        </li>
        <li>
          If driver gets any kind of ticket like speeding, logbook, or
          overweight ticket, the ticket will be taken care of by the company’s
          lawyer. Charges vary depending on the kind of ticket, place, and how
          many times the lawyer has to attend the courts on the driver’s
          behalf.
        </li>
        <li>
          If there is any problem because of the checklist, the driver is
          responsible for the cost.
        </li>
        <li>
          If the driver does not inform the company about a ticket, then the
          company will take serious actions.
        </li>
        <li>
          If fuel is finished and the truck is on empty, then the driver will
          be responsible for the cost.
        </li>
        <li>
          If the driver needs time off, two weeks' written notice is required.
        </li>
        <li>
          Refusal of a load is not acceptable at any time. If the load has to
          be expedited, it will cost extra and include late charge fees.
        </li>
        <li>
          No purchase receipts will be accepted for payment without
          pre-authorized expenses.
        </li>
        <li>
          If bills of lading are missing, then the trip will not be paid.
        </li>
        <li>
          If the driver does not send appropriate messages, then no pro number
          will be given until they come in and speak to dispatch or safety.
        </li>
        <li>
          Driver must keep the fuel card in their pocket and put the correct
          unit number at the time of fueling. If there is any misuse of the
          fuel card, then the driver is responsible.
        </li>
        <li>
          There is a $5000 fine if the driver goes to the border without
          proper setup. The driver will be responsible for making sure the
          load is clear before going to the border.
        </li>
        <li>
          Passengers are not allowed in the truck at any time.
          <p>
            Note: In case of an accident, insurance will not cover the
            passengers.
          </p>
        </li>
        <li>
          Driver is responsible for company-provided supplied materials such
          as:
          <ul>
            <li>Safety jacket</li>
            <li>Safety glasses</li>
            <li>Fuel card</li>
            <li>GM training card</li>
            <li>Company border crossing cards</li>
            <li>Truck key</li>
            <li>Safety triangle</li>
          </ul>
          <p>
            The last paycheck will be released one month from the date you
            submit all outstanding company-provided supplied materials.
          </p>
        </li>
        <li>
          There is a $150 deduction: $75 administrative fees and $75
          pre-employment drug test from the driver’s last paycheck if the
          driver leaves before three months.
        </li>
        <li>
          For owner-operators only: There is a $150 deduction: $75
          administrative fees and $75 pre-employment drug test for their
          drivers and an additional $150 if they change drivers frequently.
        </li>
      </ul>
      <div style="margin-top: 50px">
        <div style="display: flex; justify-content: space-between">
          <span>${date}</span><span>${name}</span>
        </div>
        <div style="display: flex; justify-content: space-between">
          <b>Date</b><b>Applicant's Name</b>
        </div>
      </div>
    </section>

    <!-- Load Security Policy -->
    <section>
      <h2 style="text-align: center; background: #ff0; color: #f00">
        Load Security
      </h2>
      <ul>
        <li>
          If the load is not in racks, then carefully check the load. It must
          be secure; use straps or load bars to block the load.
        </li>
        <li>
          If the driver picks up the wrong parts or forgets to deliver some
          parts, then the parts may be expedited, and the driver will be
          responsible for the cost.
        </li>
        <li>
          If the driver takes the wrong trailer, then the driver is
          responsible for the cost.
        </li>
        <li>
          Driver should pick up and deliver the right parts without damage,
          and the driver will be held responsible for costs incurred due to
          their negligence.
        </li>
      </ul>
      <p>I agree with all of the above conditions.</p>
      <div style="margin-top: 50px">
        <div style="display: flex; justify-content: space-between">
          <span>${date}</span><span>${name}</span>
        </div>
        <div style="display: flex; justify-content: space-between">
          <b>Date</b><b>Applicant's Name</b>
        </div>
      </div>
    </section>

    <!-- Acknowledgement of Understanding & Receipt of Company Policies -->
    <section>
      <h2 style="text-align: center; background: #ff0; color: #f00">
        Acknowledgement of Understanding & Receipt of Company Policies
      </h2>
      <p>Please initial each topic and sign and date the last page.</p>
      <ul>
        <li>
          <strong>Disciplinary Policy:</strong>
          <p>
            I, the undersigned, am aware that I will be subject to penalties
            possibly leading from temporary suspension from work without pay
            up to dismissal for non-compliance with the company’s rules
            depending on the severity of the incident.
          </p>
          <p>
            I also understand that if I have a number of incidents in a short
            period of time, I will be subject to retraining and re-testing:
            again, subject to severity of the incident.
          </p>
        </li>
        <li>
          <strong>Cell Phone Policy:</strong>
          <p>
            I, the undersigned, understand that it is my responsibility to
            ensure road safety by NOT using cell phones while operating a CMV.
            It is the policy of the company that our drivers are to ensure
            they practice proper safety procedures and complete all required
            calls BEFORE departing on route. If a call is received, drivers
            are to allow the call to go to voicemail and return the message at
            the next SAFE available spot to PARK the CMV. Failure to comply
            with this policy is grounds for disciplinary action by company
            management.
          </p>
        </li>
        <li>
          <strong>Speed Limits:</strong>
          <p>
            This will acknowledge that I am aware that when operating
            company-owned or leased vehicles, it is my lawful duty to comply
            with posted speed limits (up to a max of 105 KPH) as a legislated
            requirement under the Ontario Highway Traffic Act and all Local
            By-Laws. Failure to comply with this is grounds for disciplinary
            action by the company.
          </p>
        </li>
        <li>
          <strong>Vehicle Passengers:</strong>
          <p>
            I, the undersigned, understand that it is the company’s policy
            that there are no passengers in any company-owned or leased
            vehicle without prior consent from company management. It is also
            my responsibility to inform company management of any passengers
            who intend to ride in any company-owned or leased vehicle prior to
            driving that vehicle.
          </p>
        </li>
        <li>
          <strong>Driver's License Policy:</strong>
          <p>
            I, the undersigned, understand that it is my responsibility to
            inform company management of any traffic violations filed against
            me while driving a company vehicle or any personal vehicle. I also
            understand that I will be held personally liable for any damages
            that may occur if I ever drive a company vehicle without a current
            driver’s license that is in good standing with the Ministry of
            Transportation. I agree to inform the company if my driver’s
            license is suspended for any reason, and I shall advise the
            company of the suspension, the reason for the suspension, and the
            duration. I also agree to provide the company with a copy of my
            current driver’s license, and a copy every time thereafter if/when
            any endorsements or changes have occurred. If I have not passed a
            medical by the due date, I will not be permitted to drive
            company-insured vehicles.
          </p>
        </li>
        <li>
          <strong>Alcohol & Drug Policy:</strong>
          <p>
            I, the undersigned, understand that it is unacceptable to be on
            duty while under the influence of any intoxicant, which can affect
            my performance at work. I am aware of the potential danger of such
            an action and therefore agree that I will be dismissed for any
            breach of this policy.
          </p>
          <p>
            I also acknowledge that I have received and reviewed the company’s
            drug and alcohol policies. I also acknowledge it is my
            responsibility to ensure understanding of its content.
          </p>
        </li>
        <li>
          <strong>Use of Seat Belts:</strong>
          <p>
            I, the undersigned, understand that it is my responsibility to
            wear my seatbelt while operating any company-owned or leased
            vehicle. Any breach of this policy is grounds for disciplinary
            action by company management.
          </p>
        </li>
        <li>
          <strong>Daytime Running Lights:</strong>
          <p>
            I, the undersigned, understand that it is my responsibility to
            ensure the proper functioning of daytime running lights on any
            vehicle that I am operating. It is the policy of the company that
            our vehicles are equipped with daytime running lights and that
            anyone who operates any company-owned or leased vehicle adheres to
            this policy. Failure to comply with this policy is grounds for
            disciplinary action by company management.
          </p>
        </li>
        <li>
          <strong>Accident Reporting:</strong>
          <p>
            I, the undersigned, understand that it is my responsibility to
            inform the company of any and all accidents that I am involved in.
            I acknowledge that I have received training and guidance from the
            company on what the policies and procedures are in the event of an
            accident. I understand that failure to follow procedure could
            result in disciplinary action.
          </p>
        </li>
        <li>
          <strong>Refusal to Work:</strong>
          <p>
            I, the undersigned, understand that it is my responsibility to
            inform the company of any incident or safety concern, which might
            affect my ability to perform my job tasks safely. Failure to
            inform the company of any incident or safety concern before
            refusing to work would be a violation of this policy and grounds
            for disciplinary action by company management.
          </p>
        </li>
        <li>
          <strong>Hours of Work:</strong>
          <p>
            I, the undersigned, have received instruction on the policies and
            procedures of hours of work pertaining to the MTO or DOT as it is
            applicable to the country I am operating in. I also agree and
            understand to report all hours worked in the office, shop, or
            other means of employment.
          </p>
        </li>
        <li>
          <strong>Load Security & Care:</strong>
          <p>
            I, the undersigned, understand and have been informed of the Load
            Security Regulation and agree to comply with these regulations.
          </p>
        </li>
        <li>
          <strong>Daily Vehicle Inspections:</strong>
          <p>
            I, the undersigned, understand and have been informed of the Daily
            Vehicle Inspection requirements as set out in the Ontario Highway
            Traffic Act. I also agree and understand to submit any roadside
            inspection reports upon completion of any trip. I have received
            and understand that I must be able to produce the Schedule 1
            inspection document upon request.
          </p>
        </li>
        <li>
          <strong>FMCSA Driver Handbook:</strong>
          <p>
            I have received and have been instructed on the use and reference
            material of the FMCSA regulation handbook. I understand that
            should I travel in the USA, I must be able to provide this book
            upon request.
          </p>
        </li>
      </ul>
      <div>
        <div style="display: flex; justify-content: space-between">
          <span>${date}</span><span>${name}</span>
        </div>
        <div style="display: flex; justify-content: space-between">
          <b>Date</b><b>Applicant's Name</b>
        </div>
      </div>
    </section>

    <!-- Procedure - For Driver to follow -->
    <section>
      <h2 style="text-align: center; background: #ff0; color: #f00">
        Procedure - For Driver to Follow
      </h2>
      <ol>
        <li>
          Driver must know his pickup and delivery time, also know the depart
          time from the yard. Driver must call his planner before Friday for
          next week’s dispatch.
        </li>
        <li>
          Load must be on time. Must depart with extra time. Example:
          <ol>
            <li>Up to 250 miles one way take 1 hour extra</li>
            <li>500 miles takes 2 hours extra</li>
            <li>1000 miles takes 4 hours extra</li>
          </ol>
        </li>
        <li>Update Dispatch if the load is late.</li>
        <li>For any delay, immediately send ETA to dispatch.</li>
        <li>
          One (1) hour before Window time, send New ETA again so Dispatch can
          update the system.
        </li>
        <li>
          If you are held up longer than 1 hour, update the dispatch. A
          Satellite message must be sent five (5) minutes before the hour is
          over.
        </li>
        <li>
          Communication must be through satellite only – No Driver’s phone
          calls. Park your truck then send a message.
        </li>
        <li>Do not refuse after accepting/confirming dispatch.</li>
        <li>
          Vacation and time off from work must be approved by Dispatch one
          week in advance.
        </li>
        <li>
          If an owner operator’s truck breaks down, then the owner operator
          has to cover the load by using a Company truck or Rental truck.
          Failure to do so will result in the owner operator bearing the cost
          to expedite the load.
        </li>
        <li>
          Driver must send all 8 messages while completing your round trip,
          especially when arriving in the yard.
        </li>
        <li>
          Must fill out all information in Satellite Macro:
          <ul>
            <li>Destination location</li>
            <li>Drop Yard: Etobicoke, Brampton, Windsor, etc.</li>
            <li>How many percent (%) of trailers</li>
            <li>Rack or Parts</li>
          </ul>
        </li>
        <p>
          Dispatch will not issue Pro # if the information is not entered
          properly. Must send all information to set up FAST and ACE, also
          BOL, SID, Shipper # (all three (3) pieces of information are
          required).
        </p>
        <li>
          Different loads need different information; some require BOL, SID #,
          and some Shipper #. Be sure not to mix up the information.
        </li>
        <li>
          Paperwork and trailer must be checked before you leave the dock. If
          the wrong trailer is picked up, the Company will not pay for the
          trip.
        </li>
        <li>
          Always drop the trailer in the yard as instructed by the on-duty
          dispatch.
        </li>
        <li>
          There will be a $20 fine if the trailer is dropped in the wrong yard
          without dispatcher permission.
        </li>
        <li>
          Do not park the trailer in Windsor yard without Planner's
          permission.
        </li>
        <li>
          Do not park the trailer in the middle of the yard, especially in
          Windsor yard.
        </li>
        <li>
          Be sure to bring the truck to Brampton yard to fix any mechanical
          and repair problems.
        </li>
        <li>
          City and non-dedicated trucks must have ¾ fuel in their tank before
          the end of the shift. There will be a $25 fine if the tractor is
          dropped with less than ¾ full tank fuel.
        </li>
        <li>
          All Company trucks must be kept clean. Otherwise, cleaning costs
          will be charged to the driver/drivers.
        </li>
        <li>
          If there is any complaint about Dispatch:
          <ul>
            <li>
              Not responding to satellite messages or not giving a trailer on
              time
            </li>
            <li>Not answering the phone</li>
            <li>Not making FAST or ACE on time</li>
          </ul>
        </li>
      </ol>
      <p>
        Please note the dispatcher's name, day, and time, and then leave a
        message with your name, truck #, and details on the following
        confidential helpline.
      </p>
      <div>
        <div style="display: flex; justify-content: space-between">
          <span>${date}</span><span>${name}</span>
        </div>
        <div style="display: flex; justify-content: space-between">
          <b>Date</b><b>Applicant's Name</b>
        </div>
      </div>
    </section>

    <!--Agreement between Driver and Shah Transport -->
    <section>
      <h2 style="text-align: center; background: #ff0; color: #f00">
        Agreement between Driver and Shah Transport
      </h2>
      <ul>
        <li>
          I am working with Shah Transport Freight Lines Ltd. As a
          subcontractor.
        </li>
        <li>
          I am fully responsible for playing my own Income Tax and into Canada
          Pension.
        </li>
        <li>
          I am responsible for my own out of country medical and disability
          coverage.
        </li>
        <li>All my settlements are to be directed to my Incorporation.</li>
      </ul>
      <div>
        <div style="display: flex; justify-content: space-between">
          <span>${date}</span><span>${name}</span>
        </div>
        <div style="display: flex; justify-content: space-between">
          <b>Date</b><b>Applicant's Name</b>
        </div>
      </div>
    </section>

    <!--Security Seals Policy -->
    <section>
      <h2 style="text-align: center; background: #ff0; color: #f00">
        Security Seals Policy
      </h2>
      <p>
        Only C-TPAT compliant ISO/PAS 17712 Security Seals are to be used on
        the trailer door handle and trailer doors. Each driver will be given a
        supply of 10 seals from Safety Department on duty. The numbers on
        these seals are kept in computer record filed by Safety department.
      </p>
      <p>
        Seal inspection process should be implemented throughout the supply
        chain. We use the V.V.T.T. Inspection Process as follows:
      </p>
      <p><b>V -</b> View seal & trailer locking mechanisms.</p>
      <p><b>V -</b> Verify seal number for accuracy.</p>
      <p><b>T -</b> Tug on seal to make sure it is affixed properly.</p>
      <p><b>T -</b> Twist & Turn seal to make sure it does not unscrew.</p>
      <p>
        After the seal is affixed, driver should make sure that the seal is
        secure by pulling down on it.
      </p>
      <p>
        The seal is to be inspected at each stop along the route.<b>
          If it exhibits evidence of tampering it must be immediately replaced
          and the second seal number documented and communicated to dispatch
          immediately.</b
        >
        The seal number and location of the seal must be verified stated by
        the shipper on the shipping documents.
      </p>
      <p>
        <b
          >In the event that the seal is removed in-transit to the border,
          even by government officials, a second seal must be placed on the
          trailer, and the seal change must be documented.</b
        >
        The driver must immediately notify the dispatcher that the seal was
        broken and the number of the second seal that is placed on the
        trailer.
      </p>
      <h3>Driver Statement -</h3>
      <ul>
        <li>
          Do not break seal of Trailer always check and match seal # with
          paperwork.
        </li>
        <li>
          If trailer is loaded with empty rack or Parts, then match seal# with
          paperwork.
        </li>
        <li>
          Any international Shipment in bound or Outbound MUST cross with High
          Security seal.
        </li>
      </ul>
      <p style="font-weight: 700">
        If you failed to follow above said procedure you will penalize $50.00
        for each time you violate seal policy.
      </p>
      <p>
        I ${name} hereby declare that I have read and understand the above
        procedures and agree to comply with every requirement.
      </p>
      <div>
        <div style="display: flex; justify-content: space-between">
          <span>${date}</span><span>${name}</span>
        </div>
        <div style="display: flex; justify-content: space-between">
          <b>Date</b><b>Applicant's Name</b>
        </div>
      </div>
    </section>
  </div>`;
};
