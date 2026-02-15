import CTASection from '@/components/CTASection';

import Hero from './component/Hero';
import RulesSection from './component/RulesSection';

import Roles from '../subsidiaries/component/Roles';
export default function () {
    return(
        <main className='w-full text-black'>
            <Hero/>
            <RulesSection/>
            <Roles/>
			<CTASection/>
			
        </main>
    )
}