// Test Supabase function directly
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ldbuwursywymcfmwxklw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkYnV3dXJzeXd5bWNmbXd4a2x3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3MTI0MDcsImV4cCI6MjA3MjI4ODQwN30.BS_WHl-msPwy1iN0QP3YqKVoECOKPyAzK27QAFBzZc8";

const supabase = createClient(supabaseUrl, supabaseKey);

async function testFunction() {
  console.log("Testing Supabase function...");

  try {
    const { data, error } = await supabase.functions.invoke(
      "send-contact-email",
      {
        body: {
          name: "Test User",
          email: "test@example.com",
          subject: "Test Subject",
          message: "Test message from script",
        },
      }
    );

    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Success:", data);
    }
  } catch (err) {
    console.error("Exception:", err);
  }
}

// Run the test
testFunction();
