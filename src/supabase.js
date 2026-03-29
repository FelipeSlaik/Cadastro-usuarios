import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fcvmejdvlhyjyybmngme.supabase.co";
const supabaseKey = "sb_publishable_EpSsifJQ0KkmwaGlLizK3g_SddTC5_E";

export const supabase = createClient(supabaseUrl, supabaseKey);