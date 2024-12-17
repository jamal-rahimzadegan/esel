import React from 'react';
import { HtmlHead } from 'components/index';
import OrderAds from 'views/order-ads/OrderAds';

export default function OrderAdsPage() {
  return (
    <>
      <HtmlHead description="OrderAds" title="سفارش آگهی" />
      <OrderAds />
    </>
  );
}
