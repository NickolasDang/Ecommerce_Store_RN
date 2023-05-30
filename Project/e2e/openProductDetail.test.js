describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({newInstance: true});
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('can select a product from list, and view the details', async () => {
    await expect(element(by.id('main-screen'))).toBeVisible();
    await element(by.id('product-card-0')).tap();
    await expect(element(by.id('product-detail-screen'))).toBeVisible();
  });
});
