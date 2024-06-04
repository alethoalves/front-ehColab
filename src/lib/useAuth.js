
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { isLogged } from '@/api/clientReq';

const useAuth = () => {
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const logged = await isLogged();

            if (!logged) {
                router.push('/auth');
            }
        };

        checkAuth();
    }, [router]);
};

export default useAuth;