import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold text-primary mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Form Data Collection</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                When you submit a message through our contact form, we collect
                and store the following information:
              </p>
              <ul>
                <li>
                  <strong>Name:</strong> To personalize our response to you
                </li>
                <li>
                  <strong>Email Address:</strong> To respond to your inquiry
                </li>
                <li>
                  <strong>Subject:</strong> To understand the nature of your
                  message
                </li>
                <li>
                  <strong>Message Content:</strong> To address your specific
                  question or request
                </li>
                <li>
                  <strong>Technical Information:</strong> IP address and browser
                  information for security purposes
                </li>
                <li>
                  <strong>Timestamp:</strong> When the message was submitted
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>Your contact form data is used exclusively for:</p>
              <ul>
                <li>Responding to your inquiries and messages</li>
                <li>Maintaining a record of our communications</li>
                <li>Protecting against spam and abuse</li>
                <li>Improving our website and services</li>
              </ul>
              <p>
                <strong>We do not:</strong>
              </p>
              <ul>
                <li>
                  Sell, rent, or share your personal information with third
                  parties
                </li>
                <li>
                  Use your email for marketing purposes without explicit consent
                </li>
                <li>
                  Store payment or financial information (as we don't process
                  payments)
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                We implement appropriate security measures to protect your
                personal information:
              </p>
              <ul>
                <li>
                  Data is stored securely using industry-standard encryption
                </li>
                <li>
                  Access to your information is limited to authorized personnel
                  only
                </li>
                <li>
                  We use secure connections (HTTPS) for all data transmission
                </li>
                <li>Regular security audits and updates are performed</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                We retain your contact form submissions for as long as necessary
                to:
              </p>
              <ul>
                <li>Respond to your inquiry and any follow-up questions</li>
                <li>Maintain a record of our business communications</li>
                <li>Comply with legal requirements</li>
              </ul>
              <p>
                You may request deletion of your personal data at any time by
                contacting us.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal information we have about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the
                information provided on our main page.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>Our contact form uses the following third-party services:</p>
              <ul>
                <li>
                  <strong>Supabase:</strong> For secure data storage and
                  management
                </li>
                <li>
                  <strong>Resend:</strong> For email delivery services
                </li>
              </ul>
              <p>
                These services have their own privacy policies and security
                measures. We recommend reviewing their policies for complete
                transparency.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                If you have any questions about this Privacy Policy or how we
                handle your data, please contact us:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong> rdefraganunes@gmail.com
                </li>
                <li>
                  <strong>Website:</strong> Through our contact form on the main
                  page
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                We may update this Privacy Policy from time to time. When we do,
                we will:
              </p>
              <ul>
                <li>Update the "Last updated" date at the top of this page</li>
                <li>Notify users of significant changes through our website</li>
                <li>
                  Continue to protect your data according to the current policy
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
