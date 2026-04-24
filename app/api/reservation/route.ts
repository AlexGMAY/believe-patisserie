import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Your business email addresses
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || 'bonjour@chezbelieve.com'
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@chezbelieve.com'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const {
      nom,
      email,
      telephone,
      dateSouhaitee,
      typeGateau,
      nombreParts,
      message,
    } = body

    // Validate required fields
    if (!nom || !email || !telephone || !dateSouhaitee) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      )
    }

    // Send email to the client
    const clientEmail = await resend.emails.send({
      from: `Believe Patisserie <${process.env.BUSINESS_EMAIL}>`,
      to: [email],
      subject: 'Confirmation de votre demande de réservation - Believe Patisserie',
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: 'Georgia', serif;
              background-color: #0a0a0a;
              color: #f5f5f5;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 40px 20px;
              background-color: #121212;
              border: 1px solid #f5b80b33;
              border-radius: 12px;
            }
            .header {
              text-align: center;
              border-bottom: 2px solid #f5b80b;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            .header h1 {
              color: #f5b80b;
              font-size: 28px;
              margin: 0;
              font-family: 'Georgia', serif;
            }
            .header p {
              color: #999;
              margin: 5px 0 0;
              font-size: 14px;
            }
            .content {
              line-height: 1.8;
            }
            .content h2 {
              color: #fcd34d;
              font-size: 20px;
              margin-bottom: 15px;
            }
            .details {
              background-color: #1a1a1a;
              border: 1px solid #f5b80b22;
              border-radius: 8px;
              padding: 20px;
              margin: 20px 0;
            }
            .detail-row {
              display: flex;
              justify-content: space-between;
              padding: 8px 0;
              border-bottom: 1px solid #2e2e2e;
            }
            .detail-row:last-child {
              border-bottom: none;
            }
            .detail-label {
              color: #f5b80b;
              font-weight: bold;
            }
            .detail-value {
              color: #ccc;
            }
            .message-box {
              background-color: #1a1a1a;
              border-left: 4px solid #f5b80b;
              padding: 15px;
              margin: 20px 0;
              border-radius: 4px;
              color: #ccc;
              font-style: italic;
            }
            .cta {
              text-align: center;
              margin: 30px 0;
            }
            .cta a {
              background: linear-gradient(to right, #fcd34d, #f5b80b, #b8860b);
              color: #0a0a0a;
              padding: 12px 30px;
              border-radius: 25px;
              text-decoration: none;
              font-weight: bold;
              display: inline-block;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #2e2e2e;
              color: #666;
              font-size: 12px;
            }
            .footer a {
              color: #f5b80b;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✨ Believe Patisserie</h1>
              <p>L'art du gâteau sur mesure</p>
            </div>
            
            <div class="content">
              <h2>Bonjour ${nom},</h2>
              <p>Nous avons bien reçu votre demande de réservation. Notre équipe l'étudie avec attention et vous recontactera dans les <strong style="color: #f5b80b;">24 heures</strong> pour confirmer votre commande.</p>
              
              <div class="details">
                <h3 style="color: #fcd34d; margin-top: 0;">📋 Récapitulatif de votre demande</h3>
                <div class="detail-row">
                  <span class="detail-label">Gâteau</span>
                  <span class="detail-value">${typeGateau}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Date souhaitée</span>
                  <span class="detail-value">${dateSouhaitee}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Nombre de parts</span>
                  <span class="detail-value">${nombreParts}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Téléphone</span>
                  <span class="detail-value">${telephone}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Email</span>
                  <span class="detail-value">${email}</span>
                </div>
              </div>
              
              ${message ? `
                <h3 style="color: #fcd34d;">💬 Votre message</h3>
                <div class="message-box">${message}</div>
              ` : ''}
              
              <p>Si vous avez des questions ou souhaitez modifier votre commande, n'hésitez pas à nous contacter :</p>
              <p>📞 <strong style="color: #f5b80b;">+216 26-46-12-92</strong></p>
              <p>📧 <strong style="color: #f5b80b;">bonjour@chezbelieve.com</strong></p>
              
              <div class="cta">
                <a href="https://chezbelieve.com/">Visiter notre site</a>
              </div>
            </div>
            
            <div class="footer">
              <p>Believe Patisserie • Résidence Tej Ennacer II, 2034 Ariana, Tunis</p>
              <p>© ${new Date().getFullYear()} Believe Patisserie. Tous droits réservés.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    // Send email to the admin (business owner)
    const adminEmail = await resend.emails.send({
      from: `Believe Patisserie <${BUSINESS_EMAIL}>`,
      to: [ADMIN_EMAIL],
      subject: `🔔 Nouvelle réservation - ${typeGateau} - ${nom}`,
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: 'Georgia', serif;
              background-color: #f5f5f5;
              color: #0a0a0a;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 40px 20px;
              background-color: #ffffff;
              border: 1px solid #f5b80b33;
              border-radius: 12px;
            }
            .header {
              text-align: center;
              background: linear-gradient(to right, #0a0a0a, #1a1a1a);
              color: #f5b80b;
              padding: 20px;
              border-radius: 8px;
              margin-bottom: 30px;
            }
            .header h1 {
              color: #f5b80b;
              font-size: 24px;
              margin: 0;
            }
            .header .badge {
              display: inline-block;
              background-color: #f5b80b;
              color: #0a0a0a;
              padding: 4px 12px;
              border-radius: 12px;
              font-size: 12px;
              font-weight: bold;
              margin-top: 8px;
            }
            .content {
              line-height: 1.8;
            }
            .field {
              margin-bottom: 15px;
              padding: 12px;
              background-color: #fafafa;
              border-left: 4px solid #f5b80b;
              border-radius: 4px;
            }
            .field-label {
              font-weight: bold;
              color: #b8860b;
              font-size: 12px;
              text-transform: uppercase;
            }
            .field-value {
              color: #0a0a0a;
              font-size: 16px;
              margin-top: 4px;
            }
            .message-field {
              background-color: #fff8e1;
              border-left: 4px solid #f5b80b;
              padding: 15px;
              margin: 20px 0;
              border-radius: 4px;
            }
            .action-buttons {
              text-align: center;
              margin: 30px 0;
            }
            .btn-call {
              background: #f5b80b;
              color: #0a0a0a;
              padding: 10px 25px;
              border-radius: 25px;
              text-decoration: none;
              font-weight: bold;
              display: inline-block;
              margin: 5px;
            }
            .btn-email {
              background: #0a0a0a;
              color: #f5b80b;
              padding: 10px 25px;
              border-radius: 25px;
              text-decoration: none;
              font-weight: bold;
              display: inline-block;
              margin: 5px;
              border: 2px solid #f5b80b;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e0e0e0;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔔 Nouvelle Réservation</h1>
              <span class="badge">${typeGateau}</span>
            </div>
            
            <div class="content">
              <h2>Détails du client</h2>
              
              <div class="field">
                <div class="field-label">👤 Nom complet</div>
                <div class="field-value">${nom}</div>
              </div>
              
              <div class="field">
                <div class="field-label">📧 Email</div>
                <div class="field-value">${email}</div>
              </div>
              
              <div class="field">
                <div class="field-label">📞 Téléphone</div>
                <div class="field-value">${telephone}</div>
              </div>
              
              <div class="field">
                <div class="field-label">🎂 Gâteau</div>
                <div class="field-value">${typeGateau}</div>
              </div>
              
              <div class="field">
                <div class="field-label">📅 Date souhaitée</div>
                <div class="field-value">${dateSouhaitee}</div>
              </div>
              
              <div class="field">
                <div class="field-label">👥 Nombre de parts</div>
                <div class="field-value">${nombreParts}</div>
              </div>
              
              ${message ? `
                <h3>💬 Message du client</h3>
                <div class="message-field">${message}</div>
              ` : ''}
              
              <div class="action-buttons">
                <a href="tel:${telephone}" class="btn-call">📞 Appeler le client</a>
                <a href="mailto:${email}" class="btn-email">📧 Répondre par email</a>
              </div>
            </div>
            
            <div class="footer">
              <p>Système de réservation Believe Patisserie • ${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Votre demande a été envoyée avec succès. Vérifiez votre boîte email.',
        clientEmailId: clientEmail.data?.id,
        adminEmailId: adminEmail.data?.id,
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Reservation error:', error)
    
    // Handle specific Resend errors
    if (error instanceof Error) {
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de la réservation. Veuillez réessayer.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: 'Une erreur inattendue est survenue.' },
      { status: 500 }
    )
  }
}
