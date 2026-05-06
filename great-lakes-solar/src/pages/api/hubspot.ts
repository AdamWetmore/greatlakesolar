import type { NextApiRequest, NextApiResponse } from 'next'

type Data = { message: 'Success' } | { message: string }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const { firstname, lastname, email, phone, notes, address } = req.body as {
        firstname: string
        lastname: string
        email: string
        phone: string
        notes: string
        address?: string
    }

    if (!firstname || !lastname || !email || !phone || !notes) {
        return res.status(400).json({ message: 'Missing required fields' })
    }

    try {
        const response = await fetch(
            `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fields: [
                        { name: 'firstname', value: firstname },
                        { name: 'lastname', value: lastname ?? '' },
                        { name: 'email', value: email },
                        { name: 'phone', value: phone ?? '' },
                        { name: 'notes', value: notes ?? '' },
                        { name: 'address', value: address ?? '' },
                    ],
                }),
            }
        )

        if (!response.ok) {
            const text = await response.text()
            return res.status(500).json({ message: text })
        }

        return res.status(200).json({ message: 'Success' })
    } catch (err: any) {
        console.error('HUBSPOT ERROR:', err)

        return res.status(500).json({
            message: 'Submission failed',
        })
    }
}
