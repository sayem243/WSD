///<reference types = "Cypress" />



/**
 * Attempts to recursively ping the window.OneTrust tool until it 
 * responds.
 * @param timeout The amount of time before recursing.
 * @param currentRetry The current retry number.
 * @param maxRetries The total amount of retries to attempt before throwing an error.
 * @returns A resolution once the OneTrust tool responds, otherwise itself recursively until it ultimately fails or responds.
 */
export async function waitForOneTrust(
    timeout = 1000,
    currentRetry = 0,
    maxRetries = 10
){
    return new Promise(async (resolve, reject) => {
        if (currentRetry >= maxRetries) {
            if (!window.OneTrust) return reject(new Error("Maximum retries exceeded. Unable to locate window.OneTrust."))
            return reject(new Error("Maximum retries exceeded. An unknown error occurred."));
        }
        try {
            if (window.OneTrust) return resolve();
            window.setTimeout(async () => {
                return resolve(waitForOneTrust(timeout, currentRetry += 1, maxRetries));
            }, timeout);
        }
        catch (error) {
            return reject(error);
        }
    });
}