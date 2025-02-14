import jsobfus from 'javascript-obfuscator'

async function obfus(query) {
			return new Promise((resolve, reject) => {
				try {
					const obfuscationResult = jsobfus.obfuscate(query,
					{
						compact: true,
						controlFlowFlattening: true,
						controlFlowFlatteningThreshold: 1,
						numbersToExpressions: true,
						simplify: true,
						stringArrayShuffle: true,
						splitStrings: true,
						stringArrayThreshold: 1
					});
					const result = {
						status: 200,
						author: `//Encrypt By Tio\n//Yoxy multi device\n\n`,
						result: obfuscationResult.getObfuscatedCode()
					}
					resolve(result)
				} catch (e) {
					reject(e)
				}
			})
		}
		
export {
obfus
}
