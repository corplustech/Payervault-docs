import { RequiredBadge, TypeBadge } from "@/components/myComps/Badges";

export default function _acab() {
    return (
        <div>

            <details>
                <summary> Object</summary>
                <table>
                    <thead>
                        <tr>
                            <th>transferId <TypeBadge type="string"/> <RequiredBadge/> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>A unique ID to identify this transfer. Alphanumeric, hyphen and underscore (_) allowed (40 character limit).</td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>amount  <TypeBadge type="double"/> <RequiredBadge/> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Amount to be transferred. Number (&gt;=1)</td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>remarks <TypeBadge type="string"/> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Any remarks if required.</td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>name <TypeBadge type="string"/> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Beneficiary Id. Alphanumeric characters allowed.</td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>email <TypeBadge type="string"/> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>It is the name of the beneficiary. A maximum of 100 characters are allowed.</td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>phone <TypeBadge type="string"/> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Beneficiary email address, string in email Id format (Ex: johndoe_1@payervault.com) - should contain @ and dot (.) - (200 character limit)</td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>amount  <TypeBadge type="string"/> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Beneficiary phone number, phone number registered in India (only digits, 8 - 12 characters after stripping +91)</td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>bankAccount <TypeBadge type="string"/> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Beneficiary bank account (9 - 18 alphanumeric character limit) </td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>ifsc <TypeBadge type="string"/> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Accounts IFSC (standard IFSC format) - length 11, first four bank IFSC and 5th digit 0.</td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>vpa <TypeBadge type="string"/> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Beneficiary VPA, alphanumeric, dot (.), hyphen (-), at sign (@), and underscore () allowed (100 character limit). Note: underscore () and dot (.) gets accepted before and after at sign (@), but hyphen (-) get only accepted before at sign (@)</td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>transferMode <TypeBadge type="string"/> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>It is the mode of transfer. Allowed values are: banktransfer, neft, imps, rtgs, upi, paytm, and amazonpay. The default transferMode is banktransfer.</td>
                        </tr>
                    </tbody>

            </table>
            </details>

            


        </div>
    );
}