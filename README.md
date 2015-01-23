We can add the accessibilityReport.js file in the footer component / common file of any flow so that this file gets embedded in all the pages. When a page is loaded, this JS will internally invoke the accessibility testing tool <strong>http code sniffer</strong> to generate the report for that page and shows the report in that page only if there is any error.

This file SHOULD be embedded using a WOWO / Condition flag which by default is turned on in developer environment and QA environment. It will always be OFF in Live site. Hence, this file won’t be included in live site. If you are using this file for testing in local environment without any WOWO, make sure you remove this before pushing it to live. By using this JS file, whenever we develop a new page or modify an existing page we will come to know if we are introducing any accessibility error. We will also be motivated to fix the errors as we see the error report in the existing pages.
