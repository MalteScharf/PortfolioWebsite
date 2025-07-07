// Track Vercel Analytics
import { track } from 'https://esm.sh/@vercel/analytics';
// Download CV
window.trackCV = () => {
  track('download_cv_clicked');
  window.open('./img/CV_webversion.pdf', '_blank');
}
