import puppeteer from "puppeteer";

(async function playground() {
  const url = "";

  const browser = await puppeteer.launch({
    headless: false,
    args: [
      // "--no-sandbox",
      // "--disable-setuid-sandbox",
      // "--disable-dev-shm-usage",
    ],
  });

  try {
    const page = await browser.newPage();
    page.setViewport({ width: 1400, height: 700, deviceScaleFactor: 2 });

    await page.goto(url, { waitUntil: "networkidle0" });

    await page.waitForSelector("#selector");
  } catch (ex) {
    console.error(ex);
    throw ex;
  } finally {
    await browser.close();
  }
})();
