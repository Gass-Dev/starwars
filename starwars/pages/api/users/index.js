import { users } from '../../../data';

export default async (req, res) => {
    const httpMethod = req.method;
    const { username } = req.body;

    switch(httpMethod) {
        case 'GET':
            res.status(200).json(users);
            break
        case 'POST':
            //Create a new user (TODO)
            res.status(200).json({
                username: username,
            });
            break;
        default:
            res.setHeader('Allow', [ 'GET', 'POST' ]);
            res.status(405).end(`Method ${httpMethod} not allowed`);
    }

    
}