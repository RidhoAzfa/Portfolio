const { chromium } = require("C:\\Developer\\Hail Myself\\Tools\\playwright\\node_modules\\playwright");
const path = require("path");

const ARTIFACT_DIR = "C:\\Users\\ridho\\.gemini\\antigravity\\brain\\e8c88d75-1209-47f6-a8ab-c88e7b396432";

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log("[*] Launching headless browser...");
  const browser = await chromium.launch({ headless: true });

  // 1. Desktop Viewport (1280x800)
  console.log("[*] Setting up desktop viewport (1280x800)...");
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  const page = await desktopContext.newPage();

  console.log("[*] Navigating to http://localhost:3000...");
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await sleep(1500); // Allow initial animations

  // Capture Hero
  console.log("[*] Capturing desktop_dark_en_hero.png...");
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "desktop_dark_en_hero.png") });

  // Scroll to About
  console.log("[*] Scrolling to About section...");
  await page.evaluate(() => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView();
  });
  await sleep(800);
  console.log("[*] Capturing desktop_dark_en_about.png...");
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "desktop_dark_en_about.png") });

  // Scroll to Skills
  console.log("[*] Scrolling to Skills section...");
  await page.evaluate(() => {
    const el = document.getElementById("skills");
    if (el) el.scrollIntoView();
  });
  await sleep(800);
  console.log("[*] Capturing desktop_dark_en_skills.png...");
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "desktop_dark_en_skills.png") });

  // Scroll to Education (Timeline)
  console.log("[*] Scrolling to Education timeline section...");
  await page.evaluate(() => {
    const el = document.getElementById("education");
    if (el) el.scrollIntoView();
  });
  await sleep(800);
  console.log("[*] Capturing desktop_dark_en_education.png...");
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "desktop_dark_en_education.png") });

  // Scroll to Certifications
  console.log("[*] Scrolling to Certifications section...");
  await page.evaluate(() => {
    const el = document.getElementById("certifications");
    if (el) el.scrollIntoView();
  });
  await sleep(800);
  console.log("[*] Capturing desktop_dark_en_certifications.png...");
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "desktop_dark_en_certifications.png") });

  // Toggle language to ID (while scrolled to certifications)
  console.log("[*] Toggling language to ID...");
  await page.click("#lang-toggle-desktop");
  await sleep(800);
  console.log("[*] Capturing desktop_dark_id_certifications.png...");
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "desktop_dark_id_certifications.png") });

  // Toggle theme to light
  console.log("[*] Toggling theme to Light...");
  await page.click("#theme-toggle-desktop");
  await sleep(800);
  console.log("[*] Capturing desktop_light_id_certifications.png...");
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "desktop_light_id_certifications.png") });

  // Reset language to English and theme to dark for subsequent checks
  await page.click("#lang-toggle-desktop");
  await page.click("#theme-toggle-desktop");
  await sleep(800);

  // Scroll to Projects
  console.log("[*] Scrolling to Projects section...");
  await page.evaluate(() => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView();
  });
  await sleep(800);
  console.log("[*] Capturing desktop_dark_en_projects.png...");
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "desktop_dark_en_projects.png") });

  // Click first project button to open details drawer
  console.log("[*] Opening project p1 details...");
  await page.click("#project-btn-p1");
  await sleep(800);
  console.log("[*] Capturing desktop_dark_en_project_drawer.png...");
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "desktop_dark_en_project_drawer.png") });

  // Close details drawer
  console.log("[*] Closing project details drawer...");
  await page.keyboard.press("Escape");
  await sleep(500);

  // 1b. Chatbot Interaction Verification
  console.log("[*] Opening chatbot drawer...");
  await page.click('button[title="AI Chatbot Assistant"]');
  await sleep(800);
  console.log("[*] Capturing desktop_dark_en_chatbot_open.png...");
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "desktop_dark_en_chatbot_open.png") });

  console.log("[*] Clicking AWS credentials suggestion tag...");
  await page.click('text=What are his AWS credentials?');
  await sleep(1500); // Allow mock typing delay
  console.log("[*] Capturing desktop_dark_en_chatbot_reply.png...");
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "desktop_dark_en_chatbot_reply.png") });

  console.log("[*] Closing chatbot window...");
  await page.click('button[title="Close Chat"]');
  await sleep(500);

  await desktopContext.close();

  // 2. Tablet Viewport (768x1024)
  console.log("[*] Setting up tablet viewport (768x1024)...");
  const tabletContext = await browser.newContext({
    viewport: { width: 768, height: 1024 }
  });
  const tabletPage = await tabletContext.newPage();

  console.log("[*] Navigating to http://localhost:3000 on tablet...");
  await tabletPage.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await sleep(1500);

  console.log("[*] Capturing tablet_dark_en_hero.png...");
  await tabletPage.screenshot({ path: path.join(ARTIFACT_DIR, "tablet_dark_en_hero.png") });

  console.log("[*] Scrolling to About on tablet...");
  await tabletPage.evaluate(() => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView();
  });
  await sleep(800);
  console.log("[*] Capturing tablet_dark_en_about.png...");
  await tabletPage.screenshot({ path: path.join(ARTIFACT_DIR, "tablet_dark_en_about.png") });

  console.log("[*] Scrolling to Skills on tablet...");
  await tabletPage.evaluate(() => {
    const el = document.getElementById("skills");
    if (el) el.scrollIntoView();
  });
  await sleep(800);
  console.log("[*] Capturing tablet_dark_en_skills.png...");
  await tabletPage.screenshot({ path: path.join(ARTIFACT_DIR, "tablet_dark_en_skills.png") });

  console.log("[*] Scrolling to Education on tablet...");
  await tabletPage.evaluate(() => {
    const el = document.getElementById("education");
    if (el) el.scrollIntoView();
  });
  await sleep(800);
  console.log("[*] Capturing tablet_dark_en_education.png...");
  await tabletPage.screenshot({ path: path.join(ARTIFACT_DIR, "tablet_dark_en_education.png") });

  console.log("[*] Scrolling to Certifications on tablet...");
  await tabletPage.evaluate(() => {
    const el = document.getElementById("certifications");
    if (el) el.scrollIntoView();
  });
  await sleep(800);
  console.log("[*] Capturing tablet_dark_en_certifications.png...");
  await tabletPage.screenshot({ path: path.join(ARTIFACT_DIR, "tablet_dark_en_certifications.png") });

  console.log("[*] Scrolling to Projects on tablet...");
  await tabletPage.evaluate(() => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView();
  });
  await sleep(800);
  console.log("[*] Capturing tablet_dark_en_projects.png...");
  await tabletPage.screenshot({ path: path.join(ARTIFACT_DIR, "tablet_dark_en_projects.png") });

  await tabletContext.close();

  // 3. Mobile Viewport (375x812)
  console.log("[*] Setting up mobile viewport (375x812)...");
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 812 }
  });
  const mobilePage = await mobileContext.newPage();

  console.log("[*] Navigating to mobile http://localhost:3000...");
  await mobilePage.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await sleep(1500);

  console.log("[*] Capturing mobile_dark_en_hero.png...");
  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, "mobile_dark_en_hero.png") });

  console.log("[*] Scrolling to About on mobile...");
  await mobilePage.evaluate(() => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView();
  });
  await sleep(800);
  console.log("[*] Capturing mobile_dark_en_about.png...");
  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, "mobile_dark_en_about.png") });

  console.log("[*] Scrolling to Skills on mobile...");
  await mobilePage.evaluate(() => {
    const el = document.getElementById("skills");
    if (el) el.scrollIntoView();
  });
  await sleep(800);
  console.log("[*] Capturing mobile_dark_en_skills.png...");
  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, "mobile_dark_en_skills.png") });

  console.log("[*] Scrolling to Education on mobile...");
  await mobilePage.evaluate(() => {
    const el = document.getElementById("education");
    if (el) el.scrollIntoView();
  });
  await sleep(800);
  console.log("[*] Capturing mobile_dark_en_education.png...");
  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, "mobile_dark_en_education.png") });

  console.log("[*] Scrolling to Certifications on mobile...");
  await mobilePage.evaluate(() => {
    const el = document.getElementById("certifications");
    if (el) el.scrollIntoView();
  });
  await sleep(800);
  console.log("[*] Capturing mobile_dark_en_certifications.png...");
  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, "mobile_dark_en_certifications.png") });

  console.log("[*] Scrolling to Projects on mobile...");
  await mobilePage.evaluate(() => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView();
  });
  await sleep(800);
  console.log("[*] Capturing mobile_dark_en_projects.png...");
  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, "mobile_dark_en_projects.png") });

  // Open details drawer on mobile
  console.log("[*] Opening project p1 details on mobile...");
  await mobilePage.click("#project-btn-p1");
  await sleep(800);
  console.log("[*] Capturing mobile_dark_en_project_drawer.png...");
  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, "mobile_dark_en_project_drawer.png") });

  // Close drawer
  console.log("[*] Closing project details drawer on mobile...");
  await mobilePage.keyboard.press("Escape");
  await sleep(500);

  // Go back to top
  await mobilePage.evaluate(() => window.scrollTo(0, 0));
  await sleep(500);

  // Open mobile navigation menu drawer
  console.log("[*] Opening mobile drawer menu...");
  await mobilePage.click("#menu-toggle-mobile");
  await sleep(800);
  console.log("[*] Capturing mobile_menu_open.png...");
  await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, "mobile_menu_open.png") });

  await mobileContext.close();
  await browser.close();
  console.log("[+] Screenshot capture completed successfully!");
}

main().catch(err => {
  console.error("[-] Error during screenshot run:", err);
  process.exit(1);
});
